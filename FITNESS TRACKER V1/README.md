# AI Fitness Tracker - PWA

Your intelligent workout companion with AI-powered training splits, real-time workout logging, and progress tracking.

## 🚀 Features

✅ **AI-Generated Workout Splits** - Personalized programs based on your goals, experience, and equipment
✅ **Real-Time Workout Logging** - Quick-tap interface to log weight and reps during your workout
✅ **Rest Timer** - Automatic rest timer between sets
✅ **Progressive Overload Suggestions** - AI coach recommendations based on your performance
✅ **Progress Dashboard** - Track total workouts, volume, and personal records
✅ **Works Offline** - Once loaded, works without internet
✅ **Mobile-Optimized** - Designed specifically for gym use on your phone

## 📱 How to Install on iPhone

### Option 1: Quick Test (Easiest)
1. Open the `fitness-tracker.html` file in Safari
2. Start using immediately!

### Option 2: Install as App (Recommended for Gym Use)

**Step 1: Host the Files**
You need to put these files on a web server. Here are the easiest options:

**A) Using GitHub Pages (Free, Recommended)**
1. Create a GitHub account (github.com)
2. Create a new repository called `fitness-tracker`
3. Upload these files: `fitness-tracker.html`, `manifest.json`, `sw.js`
4. Go to Settings → Pages → Enable GitHub Pages
5. Your app will be at: `https://yourusername.github.io/fitness-tracker/fitness-tracker.html`

**B) Using Netlify (Free, Faster)**
1. Go to netlify.com
2. Drag and drop the folder with all three files
3. You'll get a URL like: `https://random-name.netlify.app`

**C) Using Python (Local Testing)**
```bash
# In the folder with the files, run:
python3 -m http.server 8000

# Then on your iPhone, go to:
http://YOUR_COMPUTER_IP:8000/fitness-tracker.html
```

**Step 2: Add to Home Screen on iPhone**
1. Open the hosted URL in Safari on your iPhone
2. Tap the Share button (square with arrow)
3. Scroll down and tap "Add to Home Screen"
4. Name it "Fitness AI" or whatever you want
5. Tap "Add"

**Step 3: Use It!**
- The app icon will appear on your home screen
- Opens like a native app (no browser UI)
- Works offline once loaded
- Perfect for the gym!

## 🎯 How to Use

### First Time Setup
1. Open the app
2. Answer questions about your goals, experience, schedule, and equipment
3. Tap "Generate My Split ✨"
4. The AI will create a personalized workout program for you

### Starting a Workout
1. From the Home screen, tap "Start Workout 💪"
2. For each exercise:
   - Enter the weight you're using
   - Enter the reps you completed
   - Tap the ✓ button to log the set
3. Rest timer starts automatically
4. AI coach will give you suggestions as you progress
5. Tap "Finish" when done

### Tracking Progress
1. Tap "Progress" in the bottom nav
2. See total workouts completed and volume lifted
3. View recent workout history
4. Check your personal records (PRs)

## 💡 Pro Tips

- **Quick Logging**: The app is designed for speed. Just tap weight → reps → ✓
- **Rest Timer**: Skip rest if you're ready, or add 30s if you need more time
- **AI Suggestions**: Pay attention to AI coach tips - they're based on your actual performance
- **Progressive Overload**: When you hit the top of your rep range, the AI will suggest adding weight
- **Offline Mode**: Once loaded, works without internet (perfect for gym basements!)

## 🔧 Technical Notes

**Browser**: Must use Safari on iPhone (required for "Add to Home Screen")
**Storage**: All data stored locally in your browser
**Privacy**: No data sent to servers (except the initial AI split generation)
**Backup**: Use "Export All Data" in Settings to save a backup JSON file

## ⚠️ Important Notes

### AI Split Generation
- Requires internet connection (calls Claude API)
- If API call fails, you'll get a high-quality sample workout instead
- The sample workout is still personalized based on your inputs

### API Key (For Full AI Features)
The app calls the Anthropic API without requiring you to set up an API key. However, if you want to use your own API key for unlimited split generation:

1. Get an API key from console.anthropic.com
2. Open `fitness-tracker.html` in a text editor
3. Find the `fetch` call to the Anthropic API
4. Add this header: `'x-api-key': 'YOUR_API_KEY_HERE'`

### Data Management
- **Export Data**: Settings → Export All Data (saves JSON file)
- **Reset Everything**: Settings → Reset Everything (deletes all data)
- **No Cloud Sync**: Data only exists on your device

## 🏋️ Disclaimer

This app is not a replacement for professional medical or fitness advice. Consult with a healthcare provider or certified personal trainer before starting any exercise program, especially if you have pre-existing health conditions.

## 🚀 Future Features (Ideas)

- [ ] Apple Health integration
- [ ] Exercise video demonstrations
- [ ] Nutrition tracking
- [ ] Deload week recommendations
- [ ] Workout templates library
- [ ] Social features (share PRs)
- [ ] Advanced analytics and charts

## 📝 Version

**v1.0** - Initial Release
- AI-powered split generation
- Workout logging
- Progress tracking
- Rest timer
- Progressive overload suggestions

---

Built with ❤️ using Claude AI
