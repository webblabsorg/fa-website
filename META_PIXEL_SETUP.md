# Meta Pixel Setup Guide for Fare2U

This guide will help you set up Meta (Facebook) Pixel tracking on your Fare2U website.

## What is Meta Pixel?

Meta Pixel is a piece of code that helps you:
- Track conversions from Facebook and Instagram ads
- Optimize ads for people more likely to take action
- Build targeted audiences for future ads
- Remarket to people who have visited your website

## Step 1: Get Your Meta Pixel ID

1. **Go to Meta Events Manager**
   - Visit: https://business.facebook.com/events_manager
   - Log in with your Facebook account

2. **Create or Select a Pixel**
   - Click on **"Data Sources"** in the left menu
   - Click **"Add"** → **"Meta Pixel"**
   - Give it a name (e.g., "Fare2U Website")
   - Enter your website URL: https://Fare2U.com
   - Click **"Create"**

3. **Get Your Pixel ID**
   - After creation, you'll see your Pixel ID (a 15-16 digit number)
   - Copy this number (e.g., `123456789012345`)

## Step 2: Add Pixel ID to Your Website

1. **Update Your Environment Variables**
   
   Edit your `.env.local` file (create it if it doesn't exist):
   ```bash
   # Meta (Facebook) Pixel
   NEXT_PUBLIC_META_PIXEL_ID=123456789012345
   ```
   
   Replace `123456789012345` with your actual Pixel ID.

2. **Restart Your Development Server**
   ```bash
   npm run dev
   ```

3. **For Production**
   - Add the same environment variable to your Vercel/hosting dashboard
   - Go to your project settings → Environment Variables
   - Add: `NEXT_PUBLIC_META_PIXEL_ID` with your Pixel ID value

## Step 3: Verify Pixel is Working

### Method 1: Meta Pixel Helper (Recommended)

1. **Install the Chrome Extension**
   - Go to: https://chrome.google.com/webstore
   - Search for "Meta Pixel Helper"
   - Install the extension

2. **Test Your Website**
   - Visit your website: https://Fare2U.com
   - Click the Pixel Helper icon in your browser
   - You should see your Pixel ID and "PageView" event

3. **Test Purchase Event**
   - Complete a test purchase on your website
   - On the success page, the Pixel Helper should show a "Purchase" event

### Method 2: Events Manager

1. Go to https://business.facebook.com/events_manager
2. Click on your Pixel
3. Click **"Test Events"** tab
4. Visit your website - you should see events appearing in real-time

## Step 4: Set Up Conversion Events in Ads Manager

1. **Go to Ads Manager**
   - Visit: https://business.facebook.com/adsmanager

2. **Create a Campaign**
   - Click **"Create"**
   - Choose objective: **"Sales"** or **"Conversions"**

3. **Select Your Conversion Event**
   - In Ad Set settings, under "Conversion"
   - Choose your Pixel
   - Select **"Purchase"** as the conversion event

## Events Currently Tracked

### Automatic Events
- **PageView** - Tracked on every page load

### Conversion Events
- **Purchase** - Tracked on `/success` page after payment
  - Value: $99.00 USD
  - Content: Fare2U Lifetime License

## Adding Custom Events (Optional)

To track additional events, use the `trackMetaEvent` function:

```typescript
import { trackMetaEvent } from '@/components/meta-pixel'

// Example: Track when someone starts checkout
trackMetaEvent('InitiateCheckout', {
  value: 99.00,
  currency: 'USD',
  content_name: 'Fare2U License',
})

// Example: Track when someone views pricing
trackMetaEvent('ViewContent', {
  content_name: 'Pricing Page',
  content_type: 'product',
})

// Example: Track demo access
trackMetaEvent('Lead', {
  content_name: 'Demo Access',
  content_category: 'Demo',
})
```

### Common Event Names
- `InitiateCheckout` - User starts checkout process
- `AddToCart` - User adds item to cart (if applicable)
- `ViewContent` - User views important content
- `Lead` - User becomes a lead (demo signup, contact form)
- `CompleteRegistration` - User creates an account
- `Search` - User searches your site

## Creating Audiences for Remarketing

1. **Go to Ads Manager**
   - Visit: https://business.facebook.com/adsmanager
   - Click **"Audiences"** in the menu

2. **Create Custom Audience**
   - Click **"Create Audience"** → **"Custom Audience"**
   - Choose **"Website"**
   - Select your Pixel

3. **Audience Ideas**
   - **All Website Visitors** (last 30 days)
   - **Pricing Page Viewers** (but didn't purchase)
   - **Demo Users** (engaged but didn't purchase)
   - **Purchase Converters** (for upsells or testimonials)

## Testing in Development

The Pixel works in development mode (localhost), but remember:
- Test events won't affect your live data
- Use different browser profiles or incognito mode for clean tests
- Wait 15-30 minutes for events to show up in Events Manager

## Troubleshooting

### Pixel Not Showing in Helper
- Check `.env.local` has the correct Pixel ID
- Restart your dev server after adding environment variables
- Make sure the Pixel ID has no quotes or extra spaces

### Events Not Appearing
- Wait 15-30 minutes - Meta can have delays
- Check browser console for errors
- Verify your Pixel ID is correct
- Try in incognito mode (browser extensions can block pixels)

### Purchase Event Not Firing
- Check `/app/success/page.tsx` imports are correct
- Verify you're on the actual success page after payment
- Check browser console for JavaScript errors

## Important Notes

- **Privacy**: Meta Pixel complies with GDPR/CCPA when used correctly
- **Ad Blockers**: Some users block Meta Pixel - this is normal
- **Conversion Attribution**: Meta tracks conversions for 7 days (click) or 1 day (view)
- **Cost**: Meta Pixel is free to use

## Need Help?

- **Meta Documentation**: https://developers.facebook.com/docs/meta-pixel
- **Meta Support**: https://www.facebook.com/business/help
- **Fare2U Support**: sales@Fare2U.com

---

**Last Updated**: November 2025
