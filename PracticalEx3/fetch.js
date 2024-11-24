const container = document.getElementById('container');

async function posts() {
    try {
        const ogData = await fetch('https://jsonplaceholder.typicode.com/posts');
        
        if (!ogData.ok) {
            alert('Invalid URL');
        } else {
            const data = await ogData.json();

            data.map((el) => {
                const div = document.createElement("div");
                const h1 = document.createElement("h1");
                const p = document.createElement("p");
                const rank = document.createElement("div");

                h1.classList.add("title");
                p.classList.add("p");
                rank.classList.add("rank");

                h1.textContent = el.title;
                p.textContent = el.body;
                rank.textContent = el.id;

                div.append(rank, h1, p);
                container.appendChild(div);
            });
        }
    } catch (error) {
        alert('Network error or invalid URL');
    }
}

posts();
