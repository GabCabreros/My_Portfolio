# How to Upload Your Portfolio to GitHub

## Step 1: Create a GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in (or create an account)
2. Click the **"+"** icon in the top right corner
3. Select **"New repository"**
4. Fill in the details:
   - **Repository name**: `portfolio` (or any name you like)
   - **Description**: "Personal Portfolio - UI/UX Designer & Network Designer"
   - **Visibility**: Choose **Public** (so others can see it) or **Private**
   - **DO NOT** check "Initialize with README" (we already have files)
5. Click **"Create repository"**

## Step 2: Initialize Git and Push to GitHub

After creating the repository, GitHub will show you commands. But here are the commands you'll run in CMD:

### Open Command Prompt (CMD) and navigate to your project:

```cmd
cd C:\Users\001wa\Downloads\elai
```

### Then run these commands one by one:

```cmd
git init
```

```cmd
git add .
```

```cmd
git commit -m "Initial commit: Personal portfolio website"
```

```cmd
git branch -M main
```

```cmd
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
```
*(Replace YOUR_USERNAME with your GitHub username and YOUR_REPO_NAME with the repository name you created)*

```cmd
git push -u origin main
```

## Step 3: Authentication

If GitHub asks for authentication:
- **Username**: Your GitHub username
- **Password**: Use a **Personal Access Token** (not your GitHub password)
  - Go to GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
  - Generate new token with `repo` permissions
  - Copy and use it as your password

## That's It! 🎉

Your code is now on GitHub! You can view it at:
`https://github.com/YOUR_USERNAME/YOUR_REPO_NAME`

## Next Steps (Optional)

### Deploy to Vercel/Netlify:
- **Vercel**: Connect your GitHub repo and deploy automatically
- **Netlify**: Connect your GitHub repo and deploy automatically

Both platforms will automatically deploy your site when you push changes!

