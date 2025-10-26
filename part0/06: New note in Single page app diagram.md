 browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa<br>with JSON data { content: "Kosova", date: "2025-10-25T12:37:32.608Z" }
 activate server
 server-->>browser: 201 Created message ["note created"]
 deactivate server