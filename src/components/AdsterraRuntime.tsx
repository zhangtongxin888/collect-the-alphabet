import slots from "../../scripts/adsterra-slots.json";

const config = JSON.stringify({
  adNetwork: "adsterra", status: "ready", cleanPage: false, slots,
  enablePopunder: false, enableSocialBar: false, popunderScriptUrl: "", socialBarScriptUrl: "",
}).replace(/</g, "\\u003c");

const css = ".ad-placement{margin:1rem auto;padding:.5rem;border:1px dashed rgba(127,127,127,.45);max-width:1100px}.ad-label{display:block;font-size:.75rem;letter-spacing:.04em;text-transform:uppercase;opacity:.7}";

export function AdsterraRuntime() {
  return (
    <>
      <style id="adsterra-placement-css" dangerouslySetInnerHTML={{ __html: css }} />
      <script type="application/json" id="adsterra-config" dangerouslySetInnerHTML={{ __html: config }} />
      <script src="/adsterra/runtime.js" defer />
    </>
  );
}
