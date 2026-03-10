const fotosJogadores = {
  Hinata:
    "https://i.pinimg.com/736x/be/f3/96/bef39632220c6cd097496b4ab4c780e9.jpg",
  Kageyama:
    "https://i.pinimg.com/736x/a9/3b/12/a93b12ffed458aaafe258bd0eafdf1c0.jpg",
  Tsukishima:
    "https://i.pinimg.com/736x/88/8b/0a/888b0ac22a4322b66a5df06c669f817c.jpg",
  Sugawara:
    "https://i.pinimg.com/736x/07/ab/e6/07abe6cc6ea634b3f5043559de6bb1f7.jpg",
  Tanaka:
    "https://i.pinimg.com/736x/5d/68/de/5d68de542c3477013c7ac02e2bdeca9a.jpg",
  Ushijima:
    "https://i.pinimg.com/736x/f1/44/fa/f144fa24646a10be85743db56f0fa89c.jpg",
  Oikawa:
    "https://i.pinimg.com/736x/d3/55/fa/d355fa958dc1872408ad2d1bb95a526e.jpg",
  Nishinoya:
    "https://i.pinimg.com/736x/05/89/0a/05890adcaedd819408e0c36cfdcf6552.jpg",
  Kuroo:
    "https://i.pinimg.com/736x/0d/e2/dc/0de2dc61a9c50572fa42954bb4325f88.jpg",
  Osamu:
    "https://i.pinimg.com/736x/6a/cb/4e/6acb4ec197603de86baa8f9e496faf1d.jpg",
  Kentaro:
    "https://i.pinimg.com/736x/38/76/09/387609fd8ec977c9775e1f20f06dbd4d.jpg",
  Goshiki:
    "https://i.pinimg.com/736x/34/6a/34/346a342da675163e539a16e3cd5f424e.jpg",
  Kenma:
    "https://i.pinimg.com/736x/65/85/15/65851596200ab121750160b56729cd4d.jpg",
  Asahi:
    "https://i.pinimg.com/736x/78/5c/4f/785c4f824c854edebc0e58d3dffa8ed5.jpg",
  Korai:
    "https://i.pinimg.com/736x/c2/9a/d4/c29ad45d94f22fcb557d72dd13c96c25.jpg",
  Lev: "https://i.pinimg.com/736x/63/94/8d/63948d50dcfe2dcd61bd9c2d25a64f1f.jpg",
  Kita: "https://i.pinimg.com/736x/00/b9/a2/00b9a2e921defcf93afce5d61c80ee0a.jpg",
  Atsumu:
    "https://i.pinimg.com/736x/4b/3d/88/4b3d880a6fd4aed126bfcc346cdb4cd3.jpg",
  Daichi:
    "https://i.pinimg.com/736x/dd/54/ac/dd54accfc83d5927eb9a944ff0165e9d.jpg",
  Suna: "https://i.pinimg.com/736x/0f/39/91/0f3991642ed7d8221eb5f731d53eb0d5.jpg",
  Bokuto:
    "https://i.pinimg.com/736x/c3/a4/c4/c3a4c4c857608edac217c0946431e4cb.jpg",
  Yamaguchi:
    "https://i.pinimg.com/736x/82/f5/dc/82f5dcd6c1aab15b38eee1c0e6f3517c.jpg",
  Aone: "https://i.pinimg.com/736x/47/19/78/471978587e20ff10f529ba6f639e23e7.jpg",
  Tendou:
    "https://i.pinimg.com/736x/9a/12/db/9a12dbbb0fdb70c1c9ee4b35c7ce0d5b.jpg",
};

function addPlayer() {
  const nameInput = document.getElementById("nome-jogador");
  const numberInput = document.getElementById("numero-jogador");

  // Tratamento de texto: transforma "hinata " em "Hinata"
  let name = nameInput.value.trim();
  if (name) {
    name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  }
  const number = numberInput.value.trim();

  if (!name || !number) {
    alert("Preencha todos os campos!");
    return;
  }

  // Se não achar a foto, coloca uma genérica de silhueta de vôlei
  const photo =
    fotosJogadores[name] ||
    "https://i.pinimg.com/736x/12/1c/0f/121c0f4f0cb0ebf41ec48ec78d91f27d.jpg";

  const playerSection = document.getElementById("player-table");
  let table = document.getElementById("team-table");

  // Cria a tabela com a nova coluna "Ação" se não existir
  if (!table) {
    table = document.createElement("table");
    table.id = "team-table";

    const thead = document.createElement("thead");
    const headRow = document.createElement("tr");

    const photoHead = document.createElement("th");
    photoHead.innerText = "Foto";
    const nameHead = document.createElement("th");
    nameHead.innerText = "Nome";
    const numberHead = document.createElement("th");
    numberHead.innerText = "Número";
    const actionHead = document.createElement("th");
    actionHead.innerText = "Ação";

    headRow.append(photoHead, nameHead, numberHead, actionHead);
    thead.appendChild(headRow);
    table.appendChild(thead);

    const tbody = document.createElement("tbody");
    table.appendChild(tbody);

    playerSection.appendChild(table);
  }

  const tbody = table.querySelector("tbody");
  const row = document.createElement("tr");

  const photoCell = document.createElement("td");
  const img = document.createElement("img");
  img.src = photo;
  img.alt = name;
  photoCell.appendChild(img);

  const nameCell = document.createElement("td");
  nameCell.innerText = name;

  const numberCell = document.createElement("td");
  numberCell.innerText = number;

  // Botão "X" de remover na própria linha!
  const actionCell = document.createElement("td");
  const removeBtn = document.createElement("button");
  removeBtn.innerText = "X";
  removeBtn.className = "btn-remover";
  removeBtn.onclick = function () {
    row.remove(); // Apaga o jogador

    // Se a tabela ficar vazia, remove ela inteira
    if (tbody.children.length === 0) {
      table.remove();
    }
  };
  actionCell.appendChild(removeBtn);

  row.append(photoCell, nameCell, numberCell, actionCell);
  tbody.appendChild(row);

  // Limpa os campos para o próximo
  nameInput.value = "";
  numberInput.value = "";
  nameInput.focus();
}
