class Records {
    constructor() {
        this.records = [];
    }

    add(record) {
        if (!(record instanceof Record)) {
            throw new Error("Must be a valid record!");
        }
        this.records.push(record);
        this.addHTML(record);
    }

    addHTML(record) {
        $records.append(`
            <div class="record">
                <p>
                    <span class="name">${record.name}</span>
                    <span class="rating">${record.rating}</span>
                </p>
                <button type="button">X</button>
            </div>
        `);
    }

    updateHTML() {
        $records.html("");
        for (let record of this.records) {
            this.addHTML(record);
        }
    }
    
    arrange(type, isAscend) {
        if (typeof type === "number") {
            this.records.sort((a, b) => isAscend ? a.rating - b.rating: b.rating - a.rating);
        } else {
            // https://www.javascripttutorial.net/javascript-array-sort/
            // Adapted from ^ on July 2nd, 2021
            this.records.sort((a, b) => {
                let x = a.name.toUpperCase();
                let y = b.name.toUpperCase();
                return x.localeCompare(y);
            });
            isAscend ? "": this.records.reverse();
        }
        this.updateHTML();
    }
}

class Record {
    constructor(name, rating) {
        this.name = name;
        this.rating = +rating;
    }
}

const movies = new Records();
$("form").on("submit", e => {
    e.preventDefault();
    const $name = $("#name");
    const $rating = $("#rating");
    const name = $name.val();
    const rating = $rating.val();
    $name.val("");
    $rating.val("");
    const record = new Record(name, rating);
    movies.add(record);
});

$("#sort").on("click", "button", e => {
    const $button = $(e.target);
    const type = $button.parent().hasClass("alpha") ? 'a': 1;
    const isAscend = $button.hasClass("up");
    movies.arrange(type, isAscend);
});

const $records = $("#records");
$records.on("click", "button", e => {
    $(e.target).parent().remove();
});

