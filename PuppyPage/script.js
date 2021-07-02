console.log("Let's get ready to party wtih jQuery!");

$("article img").addClass("image-center");

$("article p").last().remove();

$("#title").css("font-size", `${Math.ceil(Math.random() * 100)}px`);

$("ol").append("<li>I'm in the list!</li>");

$("aside").html("").append("<p>So sorry that a list ever existed here.</p>");

$("#colors").on("change", "input", e => {
    const $r = $("#colors").find("input").first();
    const $b = $r.parent().next().children();
    const $g = $b.parent().next().children();
    $("body").css("background-color", `rgb(${$r.val()}, ${$g.val()}, ${$b.val()})`);
});

