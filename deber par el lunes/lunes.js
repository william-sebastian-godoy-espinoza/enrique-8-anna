function englishHistory(Enrique, Ana) {
    Enrique.spouse = Ana;
    Ana.spouse = Enrique;

    return {
        Enrique: Enrique,
        Ana: Ana,
    };
}

let englishFamily = englishHistory(
    { name: "Enrique" },
    { name: "Ana" }
);

alert(englishFamily.Enrique.spouse.name);

englishFamily.Ana.status = "deceased";

if (englishFamily.Ana.status === "deceased") {
    alert("Ana has passed away.");
}

delete englishFamily.Ana.spouse;


