(() => {
    const event = new EventSource('http://localhost:3000/rebuild')//EventSource

    function remove(id) {
        const oldScript = document.getElementById(id);

        if (oldScript) {
            oldScript.remove();
        }
    }

    function addScript() {
        const id = 'playgroundJS';
        remove(id);
        const script = document.createElement('script');
        script.src = './assets/index.js';
        script.id = id;
        document.body.appendChild(script);
    }

    function addLink() {
        const id = 'playgroundCSS';
        remove(id);
        const link = document.createElement('link');
        link.href = './assets/index.css';
        link.id = id;
        link.rel = 'stylesheet';
        document.head.appendChild(link);
    }

    addScript();
    addLink();

    event.onmessage = () => {
        addScript();
        addLink();
    };
})();