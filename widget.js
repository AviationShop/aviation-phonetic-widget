/* Aviation Shop — NATO Phonetic Alphabet Converter widget
   Embed: <div id="avshop-phonetic"></div>
          <script src="https://cdn.jsdelivr.net/gh/AviationShop/aviation-phonetic-widget@main/widget.js"></script>
   Free to use. Please keep the attribution link. © Aviation Shop — aviationshop.com */
(function(){
  var MAP={A:"Alpha",B:"Bravo",C:"Charlie",D:"Delta",E:"Echo",F:"Foxtrot",G:"Golf",H:"Hotel",I:"India",J:"Juliett",K:"Kilo",L:"Lima",M:"Mike",N:"November",O:"Oscar",P:"Papa",Q:"Quebec",R:"Romeo",S:"Sierra",T:"Tango",U:"Uniform",V:"Victor",W:"Whiskey",X:"X-ray",Y:"Yankee",Z:"Zulu","0":"Zero","1":"One","2":"Two","3":"Tree","4":"Fower","5":"Fife","6":"Six","7":"Seven","8":"Eight","9":"Niner"};
  function convert(t){return (t||"").toUpperCase().split("").map(function(ch){
    if(MAP[ch])return MAP[ch];
    if(ch===" ")return "(space)";
    return ch.trim()?ch:"";
  }).filter(Boolean).join(" ");}
  function build(host){
    var s=document.createElement("style");
    s.textContent="#avshop-phonetic .avp{font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;max-width:480px;border:1px solid #e2e8f0;border-radius:14px;padding:20px;background:#fff;color:#1a2540;box-shadow:0 1px 4px rgba(0,0,0,.05)}#avshop-phonetic .avp h3{margin:0 0 12px;font-size:17px;display:flex;align-items:center;gap:6px}#avshop-phonetic .avp input{width:100%;box-sizing:border-box;padding:11px 13px;font-size:15px;border:1px solid #cbd5e1;border-radius:9px;outline:none}#avshop-phonetic .avp input:focus{border-color:#1a2540}#avshop-phonetic .avp .out{margin-top:13px;min-height:46px;padding:12px;background:#f6f8fb;border-radius:9px;font-size:15px;line-height:1.7;word-spacing:2px}#avshop-phonetic .avp .out span{display:inline-block;background:#fff;border:1px solid #e2e8f0;border-radius:6px;padding:1px 7px;margin:2px}#avshop-phonetic .avp .ft{margin-top:13px;font-size:12px;color:#6a7a8a;text-align:right}#avshop-phonetic .avp .ft a{color:#C8202F;text-decoration:none;font-weight:600}";
    host.appendChild(s);
    var w=document.createElement("div");w.className="avp";
    w.innerHTML='<h3>✈️ Phonetic Alphabet Converter</h3><input type="text" placeholder="Type a word, callsign or registration…" aria-label="Text to convert"><div class="out" aria-live="polite"></div><div class="ft">Free widget by <a href="https://www.aviationshop.com/pages/aviation-tools" target="_blank" rel="noopener">Aviation Shop</a> ✈️</div>';
    host.appendChild(w);
    var inp=w.querySelector("input"),out=w.querySelector(".out");
    function render(){var v=convert(inp.value);out.innerHTML=v?v.split(" ").map(function(x){return "<span>"+x.replace(/</g,"&lt;")+"</span>"}).join(""):'<em style="color:#9aa5b1">Result appears here…</em>';}
    inp.addEventListener("input",render);
    inp.value="N737AS";render();
  }
  function init(){var host=document.getElementById("avshop-phonetic");if(host&&!host.dataset.loaded){host.dataset.loaded="1";build(host);}}
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init);else init();
})();
