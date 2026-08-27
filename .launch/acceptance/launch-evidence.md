# Collect The Alphabet launch evidence

Status: in progress. DNS, TLS and Google Search Console evidence must be completed before acceptance.

| Check | Result | Evidence |
| --- | --- | --- |
| Independent repository | Passed | `https://github.com/zhangtongxin888/collect-the-alphabet` |
| Source commit | Passed | `be8fb85` on `main` |
| Research gate | Passed | 135 candidates; 125 approved; 10 rejected |
| Design provider | Passed | Kimi `kimi-code/k3`; 100 approved facts used |
| Formal code provider | Passed | Codex `gpt-5.6-sol` |
| Responsive design | Passed | 375, 768 and 1440; internal beginner guide CTA uniquely largest |
| Local quality checks | Passed | lint, typecheck, 5 tests, production build, post-build lint |
| Production dependency audit | Passed | 0 vulnerabilities using the official npm registry |
| Vercel deployment | Passed | `dpl_DTdMDpEpBBr5EbcMVz8TGTvzfVse`; READY |
| Vercel project | Passed | `prj_NlgJXDGqAwdus8GXsNdcpHH6ntxu`; Next.js preset |
| Apex and www attachment | Passed | Both attached to `collect-the-alphabet`; www configured as 308 redirect to apex |
| Required DNS | Partial | Apex A `216.198.79.1` saved; apex A `64.29.17.1` and www CNAME `26955fa8a28e4ebb.vercel-dns-017.com.` remain pending |
| Authoritative/public DNS | Partial | Saved apex A is visible through launch1/launch2.spaceship.net, 1.1.1.1 and 8.8.8.8; second A and www are absent |
| HTTPS and redirect | Pending | Must verify apex TLS and www 308 with path/query preservation |
| Robots and Sitemap | Pending | Must verify on the formal HTTPS domain |
| Canonical URLs | Pending | Must verify rendered formal-domain canonicals |
| GSC Domain Property | Pending | `sc-domain:collectthealphabetrolbox.wiki` |
| GSC Sitemap | Pending | `https://collectthealphabetrolbox.wiki/sitemap.xml` exact status must be Success |
| Homepage indexing request | Pending | Request once; request is not proof of indexing |

## Operational blocker

- At 2026-08-26 20:36:04 Asia/Shanghai, the only authorized Chrome connection attempt timed out while claiming the existing Spaceship Advanced DNS tab.
- No DNS or Google Search Console state changed in that attempt, and the shared browser lock was released immediately.
- Recovery requires the target domain's Spaceship Advanced DNS tab to be foregrounded and a new coordinator authorization before any further browser action.
- On 2026-08-27 10:50:35 Asia/Shanghai, Chrome connected successfully, but the target domain tab was not open; opening its exact Advanced DNS URL timed out. No DNS or GSC state changed, and the shared browser lock was released.
- A read-only recheck at 2026-08-27 10:51:57 confirmed that all authoritative/public resolvers still return only apex `216.198.79.1`, while `www` remains NXDOMAIN and Vercel reports it as misconfigured.
