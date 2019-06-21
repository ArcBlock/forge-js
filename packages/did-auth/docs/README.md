
## Motivation and workflow

> Basic DID Auth Workflow for WEB Applications

### Parties

- S: WEB Server
- A: ABT Wallet
- C: Web Client
- T: action token {token, did, status}

### Workflow

1. A web application that plan to use DID auth is hosted on `S`, web server
2. `C` loads a webpage from `S`, `C` found that user is not logged in
3. `C` ask `S` for a action token and login uri, the uri is used to display qrcode for `A` to scan
   - When `S` generates the action token, the action token is persisted in data store
   - The uri for `A` should contain the action token, so when `A` sends requests to `S`, `S` knows how to merge the session after authentication
   - `T = { token, status = created }`
4. `A` scan the qrcode displayed on `C`
5. `A` send `GET` request to `S`, to get application meta info, and requested claims
   - `S` should mark the qrcode status as `scanned` when receive this request
   - `A` should add `did` on the request url, so `S` knows how to merge the session
   - `T = { token, did, status = scanned }`
6. `A` collects user authenticated info and sign the payload, then send `POST` request to `S`
   - `S` should verify the jwt signature before any further processing
   - `S` should create/update the user when processing this request
   - `S` should only update login status when `token` and `did` match the stored ones
   - `T = { token, did, status = succeed | failed }`
7. When `C` got the token in step 3, it should check login status every second to get the login status
   - Login status should be notified on the web page when changed
   - Refresh the page when login status is `succeed`

> The above workflow not only works for login process, but also works for payment/signature/agreement process
