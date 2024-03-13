# Test Booking App

Video:

https://github.com/nikita-titov/titovBooking/assets/23120023/7eb1211e-c768-4801-b463-07a556828a11

Main options:
1. Native tab bar in the bottom with 4 tabs opening different pages.
2. All requests have "HB App" browser user-agent
3. Pull-to-refresh on all main pages.
4. Clicking links creates new IOS screens so that "back" from them works natively.
5. While links load we show "loader" in the top-right corner.
6. Clicking "sign-in" would open /sign-in in the ios sheet.
7. Handle 2 messages from the web app that are sent via postMessage:
    - "backgroundColor" - used for background color (where available) when we use pull-to-refresh.
    - "title" - used (where available) to display the title in the customHeader on the page.
    - "shareUrl" - used two parameters (where available) for the value boolean and the active link for the functional share

To process links in WebView, I used the first option I found that suited me, following the video example. Perhaps you are using a different approach, but I don’t see the whole picture and the amount of nesting on the site. Accordingly, I relied on what was available (video example) and my experience.
Thanks
