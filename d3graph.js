const linki = (src, dst, label) => {
    return { source: src, target: dst, label: label };
};
const nodes = [
    { id: "LO", img: "./img/XYXYYXXXXec-ruvikz.png" },
    { id: "LA", img: "./img/XYXYYXXXXec14-ruvikz.png" },
    { id: "LI", img: "./img/XYXYYXXXXec28-ruvikz.png" },
    { id: "LV", img: "./img/XYXYYXXXXec69-ruvikz.png" },
    { id: "LN", img: "./img/XYXYYXXXXec168-ruvikz.png" },
    { id: "LZ", img: "./img/XYXYYXXXXec249-ruvikz.png" },
    { id: "IO", img: "./img/XXXYYYXXXec-ruvikz.png" },
    { id: "IA", img: "./img/XXXYYYXXXec14-ruvikz.png" },
    { id: "II", img: "./img/XXXYYYXXXec28-ruvikz.png" },
    { id: "IV", img: "./img/XXXYYYXXXec69-ruvikz.png" },
    { id: "IN", img: "./img/XXXYYYXXXec168-ruvikz.png" },
    { id: "IZ", img: "./img/XXXYYYXXXec249-ruvikz.png" },
    { id: "TO", img: "./img/XYXYYYXYXec-ruvikz.png" },
    { id: "TA", img: "./img/XYXYYYXYXec14-ruvikz.png" },
    { id: "TI", img: "./img/XYXYYYXYXec28-ruvikz.png" },
    { id: "TV", img: "./img/XYXYYYXYXec69-ruvikz.png" },
    { id: "TN", img: "./img/XYXYYYXYXec168-ruvikz.png" },
    { id: "TZ", img: "./img/XYXYYYXYXec249-ruvikz.png" },
    { id: "OO", img: "./img/XXXXYXXXXec-ruvikz.png" },
    { id: "OA", img: "./img/XXXXYXXXXec14-ruvikz.png" },
    { id: "OI", img: "./img/XXXXYXXXXec28-ruvikz.png" },
    { id: "OV", img: "./img/XXXXYXXXXec69-ruvikz.png" },
    { id: "ON", img: "./img/XXXXYXXXXec168-ruvikz.png" },
    { id: "OZ", img: "./img/XXXXYXXXXec249-ruvikz.png" },
];

const LO = "LO";
const LA = "LA";
const LI = "LI";
const LV = "LV";
const LN = "LN";
const LZ = "LZ";
const IO = "IO";
const IA = "IA";
const II = "II";
const IV = "IV";
const IN = "IN";
const IZ = "IZ";
const TO = "TO";
const TA = "TA";
const TI = "TI";
const TV = "TV";
const TN = "TN";
const TZ = "TZ";
const OO = "OO";
const OA = "OA";
const OI = "OI";
const OV = "OV";
const ON = "ON";
const OZ = "OZ";

const colorTable = {
    FTF3: "#2f2fff",
    FTTF3: "#9898ff",
    UFTF3U3: "#ff2f2f",
    FUTU3TF3: "#2fff2f",
    U: "#808080",
    U2: "#a0a0a0",
    U3: "#d0d0d0",
};
const cT = colorTable;

const links = [
    // TO - LN - IZ cycle
    { source: TO, target: LN, label: "FTF'", color: cT.FTF3 },
    { source: LN, target: IZ, label: "FTF'", color: cT.FTF3 },
    { source: IZ, target: TO, label: "FTF'", color: cT.FTF3 },
    { source: TO, target: IZ, label: "FTTF'", color: cT.FTTF3 },
    { source: IZ, target: LN, label: "FTTF'", color: cT.FTTF3 },
    { source: LN, target: TO, label: "FTTF'", color: cT.FTTF3 },

    // TN - LZ - IO cycle
    { source: TN, target: LZ, label: "FTF'", color: cT.FTF3 },
    { source: LZ, target: IO, label: "FTF'", color: cT.FTF3 },
    { source: IO, target: TN, label: "FTF'", color: cT.FTF3 },
    { source: TN, target: IO, label: "FTTF'", color: cT.FTTF3 },
    { source: IO, target: LZ, label: "FTTF'", color: cT.FTTF3 },
    { source: LZ, target: TN, label: "FTTF'", color: cT.FTTF3 },

    // TZ - LO - IN cycle
    { source: TZ, target: LO, label: "FTF'", color: cT.FTF3 },
    { source: LO, target: IN, label: "FTF'", color: cT.FTF3 },
    { source: IN, target: TZ, label: "FTF'", color: cT.FTF3 },
    { source: TZ, target: IN, label: "FTTF'", color: cT.FTTF3 },
    { source: IN, target: LO, label: "FTTF'", color: cT.FTTF3 },
    { source: LO, target: TZ, label: "FTTF'", color: cT.FTTF3 },

    // TA - LV - II cycle
    { source: TA, target: LV, label: "FTF'", color: cT.FTF3 },
    { source: LV, target: II, label: "FTF'", color: cT.FTF3 },
    { source: II, target: TA, label: "FTF'", color: cT.FTF3 },
    { source: TA, target: II, label: "FTTF'", color: cT.FTTF3 },
    { source: II, target: LV, label: "FTTF'", color: cT.FTTF3 },
    { source: LV, target: TA, label: "FTTF'", color: cT.FTTF3 },

    // TV - LI - IA cycle
    { source: TV, target: LI, label: "FTF'", color: cT.FTF3 },
    { source: LI, target: IA, label: "FTF'", color: cT.FTF3 },
    { source: IA, target: TV, label: "FTF'", color: cT.FTF3 },
    { source: TV, target: IA, label: "FTTF'", color: cT.FTTF3 },
    { source: IA, target: LI, label: "FTTF'", color: cT.FTTF3 },
    { source: LI, target: TV, label: "FTTF'", color: cT.FTTF3 },

    // TI - LA - IV cycle
    { source: TI, target: LA, label: "FTF'", color: cT.FTF3 },
    { source: LA, target: IV, label: "FTF'", color: cT.FTF3 },
    { source: IV, target: TI, label: "FTF'", color: cT.FTF3 },
    { source: TI, target: IV, label: "FTTF'", color: cT.FTTF3 },
    { source: IV, target: LA, label: "FTTF'", color: cT.FTTF3 },
    { source: LA, target: TI, label: "FTTF'", color: cT.FTTF3 },

    { source: LN, target: LO, label: "UFTF'U'(d2)", color: cT.UFTF3U3 },
    { source: LO, target: LV, label: "UFTF'U'(d)", color: cT.UFTF3U3 },
    { source: LV, target: LN, label: "UFTF'U'(d)", color: cT.UFTF3U3 },

    { source: IZ, target: IV, label: "U2(d)", color: cT.U2 },
    { source: IV, target: IZ, label: "U2(d')", color: cT.U2 },

    { source: IN, target: IA, label: "U2(d')", color: cT.U2 },
    { source: IA, target: IN, label: "U2(d)", color: cT.U2 },

    { source: TZ, target: TA, label: "U(d2)", color: cT.U },
    { source: TA, target: TV, label: "U(d')", color: cT.U },
    { source: TV, target: TN, label: "U(d2)", color: cT.U },
    { source: TN, target: TZ, label: "U(d)", color: cT.U },
    { source: TZ, target: TN, label: "U'(d')", color: cT.U3 },
    { source: TN, target: TV, label: "U'(d2)", color: cT.U3 },
    { source: TV, target: TA, label: "U'(d)", color: cT.U3 },
    { source: TA, target: TZ, label: "U'(d2)", color: cT.U3 },
    { source: TZ, target: TV, label: "U2(d)", color: cT.U2 },
    { source: TV, target: TZ, label: "U2(d')", color: cT.U2 },
    { source: TA, target: TN, label: "U2(d)", color: cT.U2 },
    { source: TN, target: TA, label: "U2(d')", color: cT.U2 },

    { source: TN, target: TO, label: "FUTU'TF'(d2)", color: cT.FUTU3TF3 },
];

let width = window.innerWidth * 0.9,
    height = window.innerHeight * 0.9;

window.addEventListener("resize", () => {
    width = window.innerWidth * 0.9;
    height = window.innerHeight * 0.9;
    d3.select("svg").attr("width", width).attr("height", height);
    simulation
        .force("center")
        .x(width / 2)
        .y(height / 2);
    simulation.restart();
});
const svg = d3.select("svg");

const uniqueColors = [...new Set(links.map((l) => l.color))];

const defs = svg.append("defs");

uniqueColors.forEach((color) => {
    defs.append("marker").attr("id", `arrow-${color}`).attr("viewBox", "0 -5 10 10").attr("refX", 20).attr("refY", 0).attr("markerWidth", 6).attr("markerHeight", 6).attr("orient", "auto").append("path").attr("d", "M0,-5L10,0L0,5").attr("fill", color);
});

const simulation = d3
    .forceSimulation(nodes)
    .force(
        "link",
        d3
            .forceLink(links)
            .id((d) => d.id)
            .distance(200)
    )
    .force("charge", d3.forceManyBody().strength(-300))
    .force("center", d3.forceCenter(width / 2, height / 2));

const linkGroup = svg.append("g").attr("fill", "none").attr("stroke", "#999").attr("stroke-width", 2);

const linkPaths = svg
    .append("g")
    .selectAll("path")
    .data(links)
    .enter()
    .append("path")
    .attr("stroke", (d) => d.color)
    .attr("stroke-width", 2)
    .attr("fill", "none")
    .attr("marker-end", (d) => `url(#arrow-${d.color})`);

const linkLabels = svg
    .append("g")
    .selectAll("text")
    .data(links)
    .enter()
    .append("text")
    .attr("font-size", 12)
    .attr("fill", "black")
    .append("textPath")
    .attr("startOffset", "50%")
    .attr("text-anchor", "middle")
    .attr("xlink:href", (_, i) => `#path${i}`)
    .text((d) => d.label);

const nodeGroup = svg.append("g").selectAll("g").data(nodes).enter().append("g").call(drag(simulation));

nodeGroup
    .append("image")
    .attr("href", (d) => d.img)
    .attr("width", 50)
    .attr("height", 50)
    .attr("x", -25)
    .attr("y", -25);

nodeGroup
    .append("text")
    .text((d) => d.id)
    .attr("text-anchor", "middle")
    .attr("dy", 40)
    .attr("font-size", 12)
    .attr("fill", "black");

simulation.on("tick", () => {
    nodeGroup.attr("transform", (d) => {
        d.x = Math.max(50, Math.min(width - 50, d.x));
        d.y = Math.max(50, Math.min(height - 50, d.y));
        return `translate(${d.x},${d.y})`;
    });

    linkPaths
        .attr("d", (d, i) => {
            const dx = d.target.x - d.source.x;
            const dy = d.target.y - d.source.y;
            const dr = 400;
            return `M${d.source.x},${d.source.y} A${dr},${dr} 0 0,1 ${d.target.x},${d.target.y}`;
        })
        .attr("id", (_, i) => `path${i}`);
});

function drag(simulation) {
    return d3
        .drag()
        .on("start", (event) => {
            if (!event.active) simulation.alphaTarget(0.3).restart();
            event.subject.fx = event.subject.x;
            event.subject.fy = event.subject.y;
        })
        .on("drag", (event) => {
            event.subject.fx = event.x;
            event.subject.fy = event.y;
        })
        .on("end", (event) => {
            if (!event.active) simulation.alphaTarget(0);
            event.subject.fx = null;
            event.subject.fy = null;
        });
}
