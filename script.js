
/*! QE Gold – Header/Footer injector + Bilingual Nav */
(function(){
  const MAP = {
    fr: [
      { label: "Accueil", href: "index.html" },
      { label: "Technologie", href: "technology.html" },
      { label: "Produits", href: "products.html" },
      { label: "Recherche", href: "research.html" },
      { label: "Galerie", href: "gallery.html" },
      { label: "NFT", href: "nft.html" },
      { label: "Contact", href: "contact.html" },
      { label: "Mentions", href: "legal.html" },
      { label: "FAQ", href: "faq.html" },
      { label: "Livre blanc", href: "whitepaper.html" },
      { label: "Tutoriels", href: "tutorials.html" },
    ],
    en: [
      { label: "Home", href: "index-en.html" },
      { label: "Technology", href: "technology-en.html" },
      { label: "Products", href: "products-en.html" },
      { label: "Research", href: "research-en.html" },
      { label: "Gallery", href: "gallery-en.html" },
      { label: "NFT", href: "nft-en.html" },
      { label: "Contact", href: "contact-en.html" },
      { label: "Legal", href: "legal-en.html" },
      { label: "FAQ", href: "faq-en.html" },
      { label: "Whitepaper", href: "whitepaper-en.html" },
      { label: "Tutorials", href: "tutorials-en.html" },
    ]
  };
  function filename(){const p=location.pathname;return p.substring(p.lastIndexOf('/')+1)||"index.html"}
  function isEN(){return filename().endsWith("-en.html")}
  function lang(){return isEN()?"en":"fr"}
  function counterpart(href){
    if(href.endsWith("-en.html")) return href.replace("-en.html",".html");
    if(href.endsWith(".html")) return href.slice(0,-5)+"-en.html";
    return href;
  }
  function active(href){return href===filename()?'class="active"':""}
  function buildHeader(){
    const L = MAP[lang()];
    const nav = L.map(i=>`<li><a ${active(i.href)} href="${i.href}">${i.label}</a></li>`).join("");
    const toggle = `<div class="lang-toggle"><a href="${counterpart(filename())}">${lang()==="fr"?"EN":"FR"}</a></div>`;
    return `
      <header id="main-header">
        <div class="header-wrap">
          <div class="brand">QUANTUM EXCELLIUM™</div>
          <ul class="nav">${nav}</ul>
          ${toggle}
        </div>
      </header>
    `;
  }
  function buildFooter(){
    const y = new Date().getFullYear();
    return `
      <footer id="main-footer">
        <div class="footer-wrap"><small>© ${y} Quantum Excellium™ – All rights reserved.</small></div>
      </footer>
    `;
  }
  function inject(id, html){const el=document.getElementById(id); if(el) el.innerHTML=html;}
  document.addEventListener("DOMContentLoaded", function(){
    inject("header-placeholder", buildHeader());
    inject("footer-placeholder", buildFooter());
  });
})();
