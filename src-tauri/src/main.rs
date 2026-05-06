#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

#[cfg(target_os = "linux")]
fn sanitize_linux_runtime_env() {
    const SNAP_CORE20_PATH: &str = "/snap/core20/current/lib/x86_64-linux-gnu";

    if let Some(current) = std::env::var_os("LD_LIBRARY_PATH") {
        let filtered = std::env::split_paths(&current)
            .filter(|path| path != std::path::Path::new(SNAP_CORE20_PATH))
            .collect::<Vec<_>>();

        if filtered.is_empty() {
            std::env::remove_var("LD_LIBRARY_PATH");
        } else if let Ok(joined) = std::env::join_paths(filtered) {
            std::env::set_var("LD_LIBRARY_PATH", joined);
        }
    }
}

fn main() {
    #[cfg(target_os = "linux")]
    sanitize_linux_runtime_env();

    tauri::Builder::default()
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
