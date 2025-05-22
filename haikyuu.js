// Fotos (Antes da função) \\

const fotosJogadores = {
  Hinata:
    "https://i.pinimg.com/736x/be/f3/96/bef39632220c6cd097496b4ab4c780e9.jpg", //Central 10
  Kageyama:
    "https://i.pinimg.com/736x/a9/3b/12/a93b12ffed458aaafe258bd0eafdf1c0.jpg", //Levantador 9
  Tsukishima:
    "https://i.pinimg.com/736x/88/8b/0a/888b0ac22a4322b66a5df06c669f817c.jpg", //Central 11
  Sugawara:
    "https://i.pinimg.com/736x/07/ab/e6/07abe6cc6ea634b3f5043559de6bb1f7.jpg", //Levantador 2
  Tanaka:
    "https://i.pinimg.com/736x/5d/68/de/5d68de542c3477013c7ac02e2bdeca9a.jpg", //Ponteiro 5
  Ushijima:
    "https://i.pinimg.com/736x/f1/44/fa/f144fa24646a10be85743db56f0fa89c.jpg", //Oposto 1
  Oikawa:
    "https://i.pinimg.com/736x/d3/55/fa/d355fa958dc1872408ad2d1bb95a526e.jpg", // Levantador 1
  Nishinoya:
    "https://i.pinimg.com/736x/05/89/0a/05890adcaedd819408e0c36cfdcf6552.jpg", //Líbero 4
  Kuroo:
    "https://i.pinimg.com/736x/0d/e2/dc/0de2dc61a9c50572fa42954bb4325f88.jpg", // Central
  Osamu:
    "https://i.pinimg.com/736x/6a/cb/4e/6acb4ec197603de86baa8f9e496faf1d.jpg", // Oposto
  Kentaro:
    "https://i.pinimg.com/736x/38/76/09/387609fd8ec977c9775e1f20f06dbd4d.jpg", // Oposto
  Goshiki:
    "https://i.pinimg.com/736x/34/6a/34/346a342da675163e539a16e3cd5f424e.jpg", // Ponteiro
  Kenma:
    "https://i.pinimg.com/736x/65/85/15/65851596200ab121750160b56729cd4d.jpg", // Levantador
  Asahi:
    "https://i.pinimg.com/736x/78/5c/4f/785c4f824c854edebc0e58d3dffa8ed5.jpg", // Ponteiro
  Korai:
    "https://i.pinimg.com/736x/c2/9a/d4/c29ad45d94f22fcb557d72dd13c96c25.jpg", // Ponteiro
  Lev: "https://i.pinimg.com/736x/63/94/8d/63948d50dcfe2dcd61bd9c2d25a64f1f.jpg", // Central
  Kita: "https://i.pinimg.com/736x/00/b9/a2/00b9a2e921defcf93afce5d61c80ee0a.jpg", // Levantador
  Atsumu:
    "https://i.pinimg.com/736x/4b/3d/88/4b3d880a6fd4aed126bfcc346cdb4cd3.jpg", //Levantador
  Daichi:
    "https://i.pinimg.com/736x/dd/54/ac/dd54accfc83d5927eb9a944ff0165e9d.jpg", // Oposto
  Suna: "https://i.pinimg.com/736x/0f/39/91/0f3991642ed7d8221eb5f731d53eb0d5.jpg", // Central
  Bokuto:
    "https://i.pinimg.com/736x/c3/a4/c4/c3a4c4c857608edac217c0946431e4cb.jpg", // Ponteiro
  Yamaguchi:
    "https://i.pinimg.com/736x/82/f5/dc/82f5dcd6c1aab15b38eee1c0e6f3517c.jpg", // Oposto
  Aone: "https://i.pinimg.com/736x/47/19/78/471978587e20ff10f529ba6f639e23e7.jpg", // Central
  Tendou:
    "https://i.pinimg.com/736x/9a/12/db/9a12dbbb0fdb70c1c9ee4b35c7ce0d5b.jpg", // Central
};

// Função de dizer sim \\

function addPlayer() {
  const playerSection = document.getElementById("player-table");
  const h3 = document.createElement("h3");

  const nameLabel = document.createElement("label");
  nameLabel.innerText = "Nome: ";
  const nameInput = document.createElement("input");
  nameInput.type = "text";

  const numberLabel = document.createElement("label");
  numberLabel.innerText = "Número da camisa: ";
  const numberInput = document.createElement("input");
  numberInput.type = "number";

  // Botão de confirmar \\

  const confirmButton = document.createElement("button");
  confirmButton.innerText = "Confirmar";

  confirmButton.onclick = function () {
    const name = nameInput.value;
    const number = numberInput.value;

    if (!name || !number) {
      alert("Preencha todos os campos!");
      return;
    }

    const confirmacao = confirm(
      "Deseja escalar o jogador " + name + " com a camisa " + number + "?"
    );
    if (!confirmacao) return;

    const photo = fotosJogadores[name] || ""; // foto padrão caso não ache

    // Cria a tabela se ainda não existir \\
    let table = document.getElementById("team-table");
    if (!table) {
      table = document.createElement("table");
      table.id = "team-table";
      table.border = "1";

      const thead = document.createElement("thead");
      const headRow = document.createElement("tr");

      const photoHead = document.createElement("th");
      photoHead.innerText = "Foto";
      const nameHead = document.createElement("th");
      nameHead.innerText = "Nome";
      const numberHead = document.createElement("th");
      numberHead.innerText = "Número";

      headRow.append(photoHead, nameHead, numberHead);
      thead.appendChild(headRow);
      table.appendChild(thead);

      const tbody = document.createElement("tbody");
      table.appendChild(tbody);

      playerSection.appendChild(h3);
      playerSection.appendChild(table);
    }

    const tbody = table.querySelector("tbody");
    const row = document.createElement("tr");

    const photoCell = document.createElement("td");
    const img = document.createElement("img");
    img.src = photo;
    img.alt = name;
    img.width = 50;
    photoCell.appendChild(img);

    const nameCell = document.createElement("td");
    nameCell.innerText = name;

    const numberCell = document.createElement("td");
    numberCell.innerText = number;

    row.append(photoCell, nameCell, numberCell);
    tbody.appendChild(row);

    nameInput.value = "";
    numberInput.value = "";
  };

  playerSection.appendChild(nameLabel);
  playerSection.appendChild(nameInput);
  playerSection.appendChild(document.createElement("br"));

  playerSection.appendChild(numberLabel);
  playerSection.appendChild(numberInput);
  playerSection.appendChild(document.createElement("br"));
  playerSection.appendChild(document.createElement("br"));

  const buttonWrapper = document.createElement("div");
  buttonWrapper.style.display = "flex";
  buttonWrapper.style.justifyContent = "center";
  buttonWrapper.appendChild(confirmButton);

  playerSection.appendChild(buttonWrapper);
}

// Função de remover o jogador \\

function removePlayer() {
  const number = prompt("Informe o número da camisa do jogador a remover:");

  if (!number) {
    alert("Número inválido.");
    return;
  }

  const confirmacao = confirm(
    "Tem certeza que deseja remover o jogador com a camisa " + number + "?"
  );
  if (!confirmacao) return;

  const table = document.getElementById("team-table");
  if (!table) {
    alert("Nenhum jogador escalado ainda.");
    return;
  }

  const tbody = table.querySelector("tbody");
  const rows = tbody.querySelectorAll("tr");

  let jogadorRemovido = false;

  rows.forEach((row) => {
    const numberCell = row.children[2]; // terceira coluna = número da camisa
    if (numberCell.innerText === number) {
      tbody.removeChild(row);
      jogadorRemovido = true;
    }
  });

  if (!jogadorRemovido) {
    alert("Jogador com a camisa " + number + " não encontrado.");
  }
}
