## Gridlock: Terminal - App Store Connect Growth Update Guide

Open App Store Connect -> My Apps -> Gridlock: Terminal -> App Store -> current editable version.

Default rule: update, save, and verify fields. Do not click final submit/review unless Yusuf explicitly asks for that final action.

---

### 1. App Name

Keep:

```
Gridlock: Terminal
```

Do not keyword-stuff the title. The brand is clean, memorable, and already signals the terminal/airfield world.

---

### 2. Subtitle

Use for all English storefronts where the subtitle is editable:

```
Air Traffic Control Arcade
```

26 of 30 characters. This captures the primary category intent and the arcade differentiator.

Important: check AE/UAE and correct any stale `Only for iPhone` value if it still appears in a subtitle-like field.

Live check on June 18, 2026: App Store Connect exposed English (U.S.), English (Australia), English (Canada), and English (U.K.) only. No AE/UAE-specific subtitle localization was visible, and the visible subtitle was `Air Traffic Control Arcade`.

---

### 3. Keywords - English (U.S.)

Paste exactly:

```
plane,flight,landing,airport,tower,routing,puzzle,daily,reflex,crash,survive,offline,free,chaos
```

95 of 100 characters. No spaces after commas. No repeats from title (`gridlock`, `terminal`) or subtitle (`air`, `traffic`, `control`, `arcade`).

---

### 4. Keywords - English Localizations

Add or update the English locale keyword fields below.

English (U.K.):

```
aeroplane,runway,controller,radar,approach,departure,hold,stack,clearance,taxiway,gatwick,heathrow
```

English (Australia):

```
runway,radar,airspace,circuit,melbourne,sydney,glideslope,flightpath,approach,landing
```

English (Canada):

```
runway,radar,airspace,tower,glideslope,transponder,mayday,turbulence,toronto,pearson,flight,landing
```

English (Ireland):

```
runway,radar,airspace,tower,dublin,shannon,landing,flight,traffic,approach,clearance,stack
```

All fields are under 100 characters. Avoid airline trademarks in keyword fields.

Live check on June 18, 2026: English (U.K.) and English (Canada) matched the target values. English (Australia) was visible but the keyword field was locked on the ready-for-distribution version; update it to the trademark-safe list above on the next editable version. English (Ireland) was not exposed in the localization selector.

---

### 5. Promotional Text

Paste:

```
NEW: Daily Dispatch mode - one challenge, one score, one chance per day. Free. No ads. No in-app purchases. Pure arcade air traffic control.
```

140 of 170 characters. This is updatable without a binary resubmission.

Rotation options for later:

```
How long can you survive? Draw flight paths, land aircraft, and keep the terminal alive. Free with no ads and no in-app purchases.
```

```
Daily Dispatch is live - one shot, one score, one chance per day. Climb the leaderboard. Free. No ads. No IAP.
```

```
Birds, turbulence, and screen edges - the skies fight back. Can you keep the terminal alive? Free arcade game. No ads. No IAP.
```

---

### 6. Description Lead

Add this as the first line of the app description:

```
Free. No ads. No in-app purchases. Just pure gameplay.
```

Keep the rest of the description truthful and gameplay-led. Do not add competitor names or unsupported claims.

---

### 7. Category

Preferred:

```
Primary: Arcade
Secondary: Simulation
```

Fallback if primary Arcade is unavailable or risky:

```
Primary: Simulation
Secondary: Arcade
```

Reason: Gridlock plays as a fast reflex arcade game, not a slow simulator.

Live check on June 18, 2026: the current category is locked as Games -> Simulation -> Puzzle. Move toward Arcade on the next new app version where category changes are available.

---

### 8. Custom Product Pages

Create these after the default metadata is saved.

#### ATC Arcade

Audience: aviation searchers, air traffic control game searches, aviation-adjacent communities.

First screenshot caption:

```
Draw flight paths. Land aircraft. Don't crash.
```

Promotional text:

```
Draw flight paths. Land aircraft. Don't crash. Fast arcade air traffic control for quick, high-pressure runs.
```

Stonebird routing page:

```
https://stonebirdgroup.com/labs/gridlock-terminal/air-traffic-control-game
```

Custom product page URL:

```
https://apps.apple.com/us/app/gridlock-terminal/id6774062902?ppid=a0fb1d65-8411-4cd5-8aff-cc939062baff
```

#### Daily Dispatch

Audience: daily challenge, leaderboard, streak, and social replay audiences.

First screenshot caption:

```
One daily challenge. One score. One chance.
```

Promotional text:

```
One daily challenge. One score. One chance. Play Daily Dispatch and climb the Game Center leaderboard.
```

Stonebird routing page:

```
https://stonebirdgroup.com/labs/gridlock-terminal/daily-challenge-game
```

Custom product page URL:

```
https://apps.apple.com/us/app/gridlock-terminal/id6774062902?ppid=4c0a87ac-17bb-4b73-849d-b0ebd2c36ab3
```

#### No Ads Arcade

Audience: casual iPhone arcade players, no-ad game searches, offline-friendly mobile game searches.

First screenshot caption:

```
Free. No ads. No in-app purchases.
```

Promotional text:

```
Free. No ads. No in-app purchases. Play quick arcade air traffic control runs offline, with pure gameplay and Game Center competition.
```

Stonebird routing page:

```
https://stonebirdgroup.com/labs/gridlock-terminal/offline-arcade-game
```

Custom product page URL:

```
https://apps.apple.com/us/app/gridlock-terminal/id6774062902?ppid=61bd6426-3d57-4ac2-a71d-d2263efeef05
```

The matching Stonebird CTA links now route to these custom product page URLs.

---

### 9. Screenshot Caption Set

Use these when refreshing App Store screenshots:

1. `Draw flight paths. Land aircraft. Don't crash.`
2. `Daily Dispatch - one score, one chance.`
3. `How long can you keep the terminal alive?`
4. `Compete on Game Center leaderboards.`
5. `Free. No ads. No in-app purchases.`

Screenshots must show real app UI.

---

### 10. Verification Checklist

1. [ ] Subtitle is exactly `Air Traffic Control Arcade`
2. [ ] US keywords match exactly and are under 100 characters
3. [ ] UK/AU/CA/IE keywords match exactly and are under 100 characters
4. [ ] Promotional text matches exactly and is under 170 characters
5. [ ] Description starts with the free/no ads/no IAP line
6. [ ] Category is Arcade primary or Arcade secondary
7. [ ] AE/UAE subtitle-like fields do not show `Only for iPhone`
8. [ ] App Store Connect save succeeds
9. [ ] Re-open App Store Connect and verify saved field values
10. [ ] Stop before final submission unless explicitly instructed
