# Final Project Setup Checklist

## ✅ Current Status

- [x] Website is live on GitHub Pages
- [x] Responsive design implemented
- [x] Chatbot component ready (supports Flowise API)
- [x] Knowledge base document created
- [ ] Flowise deployed to cloud
- [ ] RAG configured in Flowise
- [ ] Environment variables configured
- [ ] Chatbot connected to Flowise
- [ ] Testing completed

---

## Step 1: Deploy Flowise to Cloud

### Option A: Railway (Easiest - Recommended)

1. **Sign up**: Go to [railway.app](https://railway.app) and sign up with GitHub
2. **Create Project**: Click "New Project" → "Deploy from GitHub repo"
3. **Add Service**: Choose "Empty Project" or "Docker"
4. **Create Dockerfile** (if using Docker):
   ```dockerfile
   FROM node:18-alpine
   WORKDIR /app
   RUN npm install -g flowise
   EXPOSE 3000
   CMD ["flowise", "start"]
   ```
5. **Set Environment Variables**:
   - `PORT=3000`
   - `FLOWISE_USERNAME=admin` (optional)
   - `FLOWISE_PASSWORD=yourpassword` (optional)
6. **Deploy**: Railway will automatically deploy
7. **Get URL**: Copy your Railway URL (e.g., `https://your-app.railway.app`)

### Option B: Render

1. **Sign up**: Go to [render.com](https://render.com)
2. **New Web Service**: Connect your GitHub repo
3. **Build Settings**:
   - Build Command: `npm install -g flowise`
   - Start Command: `flowise start`
4. **Environment Variables**: Add `PORT=3000`
5. **Deploy**: Render will build and deploy
6. **Get URL**: Copy your Render URL

### Option C: Flowise Cloud (Paid)

1. Go to [flowiseai.com](https://flowiseai.com)
2. Sign up and create account
3. Create new flow
4. Get your API endpoint

---

## Step 2: Set Up RAG in Flowise

1. **Access Flowise UI**: Open your deployed Flowise URL
2. **Create New Flow**:
   - Click "New Chatflow"
   - Name it "Portfolio RAG Chatbot"

3. **Add RAG Components** (drag and drop):
   ```
   Start → Document Loader → Text Splitter → Vector Store → Retrieval QA Chain → Chat Model → End
   ```

4. **Configure Document Loader**:
   - Type: Choose "Text File" or "PDF File"
   - Upload `knowledge-base.txt` (from this project)
   - Or use URL loader if hosting the file

5. **Configure Text Splitter**:
   - Chunk Size: 1000
   - Chunk Overlap: 200

6. **Configure Vector Store**:
   - Choose: "In-Memory Vector Store" (easiest) or "Chroma" (for persistence)
   - For production, use Chroma, Pinecone, or Weaviate

7. **Configure Retrieval QA Chain**:
   - Connect to your Chat Model
   - Set number of documents to retrieve: 3-5

8. **Configure Chat Model**:
   - Type: ChatOpenAI
   - Model: gpt-3.5-turbo or gpt-4
   - Temperature: 0.7
   - Add your OpenAI API Key

9. **Save Flow**: Click "Save" button
10. **Get Flow ID**: 
    - Click "View API" or check the URL
    - Copy the Flow ID from the URL or API endpoint

---

## Step 3: Configure Environment Variables

### For Local Testing:

1. Create `.env` file in project root:
   ```env
   VITE_FLOWISE_API_URL=https://your-flowise-app.railway.app/api/v1/prediction/YOUR_FLOW_ID
   ```

2. Replace:
   - `your-flowise-app.railway.app` with your actual Flowise URL
   - `YOUR_FLOW_ID` with your actual Flow ID

### For GitHub Pages (via Vercel/Netlify):

Since GitHub Pages doesn't support environment variables directly, you have two options:

**Option 1: Use Vercel (Recommended)**
1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Add environment variable:
   - Name: `VITE_FLOWISE_API_URL`
   - Value: `https://your-flowise-app.railway.app/api/v1/prediction/YOUR_FLOW_ID`
4. Deploy

**Option 2: Hardcode in Chatbot.jsx (Not recommended for production)**
- Update the `FLOWISE_API_URL` constant directly in the code

---

## Step 4: Update Chatbot Component

The chatbot is already updated to support Flowise! Just make sure:

1. Environment variable is set correctly
2. Flowise API URL is accessible
3. CORS is enabled in Flowise (should be by default)

---

## Step 5: Test Everything

### Test Checklist:

- [ ] Flowise is accessible (visit your Flowise URL)
- [ ] Flowise UI loads correctly
- [ ] RAG flow is created and saved
- [ ] Knowledge base is uploaded
- [ ] Flow ID is copied correctly
- [ ] Environment variable is set
- [ ] Website loads chatbot
- [ ] Chatbot connects to Flowise
- [ ] Chatbot responds with RAG answers
- [ ] Test questions about portfolio work
- [ ] No console errors
- [ ] Works on mobile and desktop

### Test Questions:

1. "What is Godwin's experience?"
2. "Tell me about the projects"
3. "What skills does Godwin have?"
4. "How can I contact Godwin?"
5. "What services does Godwin offer?"

---

## Step 6: Deploy Updates

After everything is working:

```bash
# Commit changes
git add .
git commit -m "Connect chatbot to Flowise with RAG"

# Push to GitHub
git push origin main

# Deploy to GitHub Pages
npm run deploy
```

---

## Troubleshooting

### Chatbot shows "error" message:
- Check Flowise API URL is correct
- Verify Flow ID is correct
- Check Flowise is running and accessible
- Verify CORS is enabled

### RAG not working:
- Check knowledge base is uploaded
- Verify vector store is configured
- Test retrieval chain is connected
- Check OpenAI API key is valid

### Environment variables not working:
- For GitHub Pages, use Vercel or Netlify instead
- Or hardcode the URL temporarily
- Check variable name starts with `VITE_`

---

## Quick Reference

### Flowise API Endpoint Format:
```
https://your-flowise-url.com/api/v1/prediction/YOUR_FLOW_ID
```

### Test Flowise API:
```bash
curl -X POST https://your-flowise-url.com/api/v1/prediction/YOUR_FLOW_ID \
  -H "Content-Type: application/json" \
  -d '{"question": "What is Godwin's experience?"}'
```

### Environment Variable:
```env
VITE_FLOWISE_API_URL=https://your-flowise-url.com/api/v1/prediction/YOUR_FLOW_ID
```

---

## Next Steps

1. ✅ Deploy Flowise (choose Railway, Render, or Flowise Cloud)
2. ✅ Set up RAG in Flowise UI
3. ✅ Get Flow ID
4. ✅ Set environment variable
5. ✅ Test chatbot
6. ✅ Deploy updates

**Need help?** Let me know which step you're on and I'll assist!

