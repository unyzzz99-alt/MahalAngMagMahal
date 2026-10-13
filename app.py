"""Serve the static guessing game locally with Python's standard library."""

from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path


HOST = "127.0.0.1"
PORT = 8000
PROJECT_DIR = Path(__file__).resolve().parent


if __name__ == "__main__":
    server = ThreadingHTTPServer(
        (HOST, PORT),
        lambda *args, **kwargs: SimpleHTTPRequestHandler(
            *args, directory=str(PROJECT_DIR), **kwargs
        ),
    )
    print(f"Guessing game is running at http://{HOST}:{PORT}")
    print("Press Ctrl+C to stop the server.")
    server.serve_forever()
