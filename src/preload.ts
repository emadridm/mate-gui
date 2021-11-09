window.addEventListener('DOMContentLoaded', () => {
    const replaceText = (selector: string, text: string) => {
        const element = document.getElementById(selector);
        if (element) element.innerText = text;
    }
    for (const dependecy of ['node', 'chrome', 'electron']) {
        replaceText(`${dependecy}-version`, process.versions[dependecy]);
    }
})
