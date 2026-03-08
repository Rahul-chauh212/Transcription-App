import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
```

---

### File 5 — `voice-recorder/src/App.jsx`
This is the big one — paste the full App.jsx code from the zip file I gave you earlier.

---

### File 6 — `whisper-stt/requirements.txt`
```
faster-whisper==1.1.0
fastapi==0.115.0
uvicorn[standard]==0.30.0
python-multipart==0.0.12
ffmpeg-python==0.2.0
pydantic==2.8.0
```

---

### File 7 — `whisper-stt/model.py`
Paste the `model.py` content from the zip.

### File 8 — `whisper-stt/server.py`
Paste the `server.py` content from the zip.

### File 9 — `whisper-stt/setup.sh`
Paste the `setup.sh` content from the zip.

### File 10 — `fine-tuning/README.md`
```
# Fine-Tuning (Step 3 — Coming Next)
Fine-tune Whisper for custom / local languages.
```

### File 11 — `integration/README.md`
```
# Integration (Step 4 — Coming)
Whisper + Ollama LLM full pipeline.
```

---

## Step 6: Edit the Root README.md

GitHub already created a `README.md` for you. Click on it → click the **pencil icon (✎)** to edit → replace the content with the full README from the zip → commit.

---

## Step 7: Verify Your Structure

After all files are uploaded, your repo page should show all the folders. Click into each one to verify the files are there. It should look like this:
```
📁 fine-tuning
📁 integration  
📁 voice-recorder
📁 whisper-stt
📄 .gitignore
📄 README.md
