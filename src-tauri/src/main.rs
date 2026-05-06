#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

#[cfg(target_os = "linux")]
fn sanitize_linux_runtime_env() {
    sanitize_colon_delimited_path_var("LD_LIBRARY_PATH");
    sanitize_preload_var();
    sanitize_snap_specific_env_vars();
}

#[cfg(target_os = "linux")]
fn sanitize_colon_delimited_path_var(var_name: &str) {
    if let Some(current) = std::env::var_os(var_name) {
        let filtered = std::env::split_paths(&current)
            .filter(|path| !is_snap_runtime_library_path(path))
            .collect::<Vec<_>>();

        if filtered.is_empty() {
            std::env::remove_var(var_name);
        } else if let Ok(joined) = std::env::join_paths(filtered) {
            std::env::set_var(var_name, joined);
        }
    }
}

#[cfg(target_os = "linux")]
fn sanitize_preload_var() {
    let Some(current) = std::env::var_os("LD_PRELOAD") else {
        return;
    };

    let preload = current.to_string_lossy();
    let filtered = preload
        .split_ascii_whitespace()
        .filter(|entry| !is_snap_runtime_library_entry(entry))
        .map(str::to_owned)
        .collect::<Vec<_>>();

    if filtered.is_empty() {
        std::env::remove_var("LD_PRELOAD");
    } else {
        std::env::set_var("LD_PRELOAD", filtered.join(" "));
    }
}

#[cfg(target_os = "linux")]
fn is_snap_runtime_library_path(path: &std::path::Path) -> bool {
    let normalized = path.to_string_lossy().replace("\\", "/");
    let normalized = normalized.trim_end_matches('/');
    normalized.starts_with("/snap/")
}

#[cfg(target_os = "linux")]
fn is_snap_runtime_library_entry(entry: &str) -> bool {
    let normalized = entry.replace("\\", "/");
    normalized.starts_with("/snap/")
}

#[cfg(target_os = "linux")]
fn sanitize_snap_specific_env_vars() {
    for var_name in [
        "GTK_PATH",
        "GTK_EXE_PREFIX",
        "GDK_PIXBUF_MODULE_FILE",
        "GIO_MODULE_DIR",
        "SNAP",
        "SNAP_ARCH",
        "SNAP_COMMON",
        "SNAP_CONTEXT",
        "SNAP_COOKIE",
        "SNAP_DATA",
        "SNAP_INSTANCE_KEY",
        "SNAP_INSTANCE_NAME",
        "SNAP_LIBRARY_PATH",
        "SNAP_NAME",
        "SNAP_REAL_HOME",
        "SNAP_REEXEC",
        "SNAP_REVISION",
        "SNAP_USER_COMMON",
        "SNAP_USER_DATA",
        "SNAP_VERSION",
    ] {
        std::env::remove_var(var_name);
    }
}

fn main() {
    #[cfg(target_os = "linux")]
    sanitize_linux_runtime_env();

    tauri::Builder::default()
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
