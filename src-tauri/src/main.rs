#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

#[cfg(target_os = "linux")]
fn sanitize_linux_runtime_env() {
    sanitize_colon_delimited_path_var("LD_LIBRARY_PATH");
    sanitize_preload_var();
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

    let filtered = current
        .to_string_lossy()
        .split_ascii_whitespace()
        .filter(|entry| !is_snap_runtime_library_entry(entry))
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
        && normalized.ends_with("/lib/x86_64-linux-gnu")
        && normalized.contains("/current/")
}

#[cfg(target_os = "linux")]
fn is_snap_runtime_library_entry(entry: &str) -> bool {
    let normalized = entry.replace("\\", "/");
    normalized.starts_with("/snap/")
}

fn main() {
    #[cfg(target_os = "linux")]
    sanitize_linux_runtime_env();

    tauri::Builder::default()
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
