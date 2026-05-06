#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

#[cfg(target_os = "linux")]
fn sanitize_linux_runtime_env() {
    if let Some(current) = std::env::var_os("LD_LIBRARY_PATH") {
        let filtered = std::env::split_paths(&current)
            .filter(|path| !is_snap_runtime_library_path(path))
            .collect::<Vec<_>>();

        if filtered.is_empty() {
            std::env::remove_var("LD_LIBRARY_PATH");
        } else if let Ok(joined) = std::env::join_paths(filtered) {
            std::env::set_var("LD_LIBRARY_PATH", joined);
        }
    }
}

#[cfg(target_os = "linux")]
fn is_snap_runtime_library_path(path: &std::path::Path) -> bool {
    let normalized = path.to_string_lossy().replace("\\", "/");
    normalized.starts_with("/snap/")
        && normalized.ends_with("/lib/x86_64-linux-gnu")
        && normalized.contains("/current/")
}

fn main() {
    #[cfg(target_os = "linux")]
    sanitize_linux_runtime_env();

    tauri::Builder::default()
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
