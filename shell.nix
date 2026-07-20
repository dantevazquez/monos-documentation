{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  buildInputs = with pkgs; [
    python3
    python3Packages.mkdocs
    python3Packages.mkdocs-material
    python3Packages.pymdown-extensions
  ];

  shellHook = ''
    echo "MkDocs development environment loaded."
    echo "Run 'mkdocs serve' (or 'mkdocs serve -a 0.0.0.0:8000') to start the preview server."
  '';
}
