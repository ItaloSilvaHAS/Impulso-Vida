const mobileMenuButton = document.getElementById("mobileMenuButton");
const mobileMenu = document.getElementById("mobileMenu");

mobileMenuButton.addEventListener("click", () => {
  const expanded = mobileMenuButton.getAttribute("aria-expanded") === "true";
  if (expanded) {
    mobileMenu.classList.add("hidden");
    mobileMenuButton.setAttribute("aria-expanded", "false");
    mobileMenuButton.querySelector("i").classList.remove("fa-times");
    mobileMenuButton.querySelector("i").classList.add("fa-bars");
  } else {
    mobileMenu.classList.remove("hidden");
    mobileMenuButton.setAttribute("aria-expanded", "true");
    mobileMenuButton.querySelector("i").classList.remove("fa-bars");
    mobileMenuButton.querySelector("i").classList.add("fa-times");
  }
});

const btnToggleDark = document.getElementById("btnToggleDark");
const htmlEl = document.documentElement;
const icon = btnToggleDark.querySelector("i");

if (localStorage.getItem("impulsoVidaDarkMode") === "true") {
  htmlEl.classList.add("dark");
  icon.classList.remove("fa-moon");
  icon.classList.add("fa-sun");
} else {
  htmlEl.classList.remove("dark");
  icon.classList.remove("fa-sun");
  icon.classList.add("fa-moon");
}

btnToggleDark.addEventListener("click", () => {
  htmlEl.classList.toggle("dark");
  const isDark = htmlEl.classList.contains("dark");
  localStorage.setItem("impulsoVidaDarkMode", isDark);
  if (isDark) {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  } else {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  }
});

const usersKey = "impulsoVidaUsers";
const helpRequestsKey = "impulsoVidaHelpRequests";

let users =
  JSON.parse(localStorage.getItem(usersKey)) || [
    {
      id: 1,
      name: "Gustavo",
      email: "gustavo@impulsovida.com",
      cpf: "000.000.000-01",
      password: "1234",
      role: "co-ceo",
      deficiencyType: null,
      examConfirmed: true,
      concernLevel: null,
      plan: null,
      examScheduled: null,
    },
    {
      id: 2,
      name: "Caio",
      email: "caio@impulsovida.com",
      cpf: "000.000.000-02",
      password: "1234",
      role: "ceo",
      deficiencyType: null,
      examConfirmed: true,
      concernLevel: null,
      plan: null,
      examScheduled: null,
    },
    {
      id: 3,
      name: "Livia",
      email: "livia@impulsovida.com",
      cpf: "000.000.000-03",
      password: "1234",
      role: "rh",
      deficiencyType: null,
      examConfirmed: true,
      concernLevel: null,
      plan: null,
      examScheduled: null,
    },
  ];

let helpRequests = JSON.parse(localStorage.getItem(helpRequestsKey)) || [];

let currentUser = null;

const btnLogin = document.getElementById("btnLogin");
const btnRegister = document.getElementById("btnRegister");
const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const formMessage = document.getElementById("formMessage");
const dashboard = document.getElementById("dashboard");
const mainContent = document.getElementById("home");
const aboutSection = document.getElementById("sobre");
const faqSection = document.getElementById("faq");
const depoimentosSection = document.getElementById("depoimentos");
const loginSection = document.getElementById("login");
const btnLogout = document.getElementById("btnLogout");
const btnHelpRequest = document.getElementById("btnHelpRequest");
const btnFAQChat = document.getElementById("btnFAQChat");
const btnAdminPanel = document.getElementById("btnAdminPanel");
const btnProfile = document.getElementById("btnProfile");
const btnPlans = document.getElementById("btnPlans");
const btnCatalog = document.getElementById("btnCatalog");
const helpRequestSection = document.getElementById("helpRequestSection");
const faqChatSection = document.getElementById("faqChatSection");
const adminPanelSection = document.getElementById("adminPanelSection");
const profileSection = document.getElementById("profileSection");
const plansSection = document.getElementById("plansSection");
const catalogSection = document.getElementById("catalogSection");
const patientsTableBody = document.getElementById("patientsTableBody");
const adminMessage = document.getElementById("adminMessage");
const helpRequestForm = document.getElementById("helpRequestForm");
const helpRequestMessage = document.getElementById("helpRequestMessage");
const chatMessages = document.getElementById("chatMessages");
const chatForm = document.getElementById("chatForm");
const faqSelect = document.getElementById("faqSelect");
const profileName = document.getElementById("profileName");
const profileEmail = document.getElementById("profileEmail");
const profileCPF = document.getElementById("profileCPF");
const profileDeficiency = document.getElementById("profileDeficiency");
const profileConcern = document.getElementById("profileConcern");
const profilePlan = document.getElementById("profilePlan");
const examMessage = document.getElementById("examMessage");
const welcomeMessage = document.getElementById("welcomeMessage");
const planMessage = document.getElementById("planMessage");
const catalogMessage = document.getElementById("catalogMessage");
const examScheduleForm = document.getElementById("examScheduleForm");
const examDateInput = document.getElementById("examDate");
const examTimeSelect = document.getElementById("examTime");
const examLocationInput = document.getElementById("examLocation");
const examInfo = document.getElementById("examInfo");
const scheduledDateSpan = document.getElementById("scheduledDate");
const scheduledTimeSpan = document.getElementById("scheduledTime");
const scheduledLocationSpan = document.getElementById("scheduledLocation");

function setMinExamDate() {
  const today = new Date().toISOString().split("T")[0];
  examDateInput.min = today;
}
setMinExamDate();

function populateExamTimes() {
  examTimeSelect.innerHTML =
    '<option disabled selected value="">Selecione o horário</option>';
  for (let hour = 7; hour <= 19; hour += 2) {
    const option = document.createElement("option");
    const hourStr = hour.toString().padStart(2, "0");
    option.value = `${hourStr}:00`;
    option.textContent = `${hourStr}:00`;
    examTimeSelect.appendChild(option);
  }
}
populateExamTimes();

btnLogin.addEventListener("click", () => {
  loginForm.classList.remove("hidden");
  registerForm.classList.add("hidden");
  formMessage.textContent = "";
  btnLogin.classList.add("bg-green-800", "text-white");
  btnLogin.classList.remove("bg-gray-300", "text-gray-800");
  btnRegister.classList.remove("bg-green-800", "text-white");
  btnRegister.classList.add("bg-gray-300", "text-gray-800");
  btnLogin.setAttribute("aria-selected", "true");
  btnLogin.setAttribute("tabindex", "0");
  btnRegister.setAttribute("aria-selected", "false");
  btnRegister.setAttribute("tabindex", "-1");
  loginForm.setAttribute("tabindex", "0");
  registerForm.setAttribute("tabindex", "-1");
});

btnRegister.addEventListener("click", () => {
  registerForm.classList.remove("hidden");
  loginForm.classList.add("hidden");
  formMessage.textContent = "";
  btnRegister.classList.add("bg-green-800", "text-white");
  btnRegister.classList.remove("bg-gray-300", "text-gray-800");
  btnLogin.classList.remove("bg-green-800", "text-white");
  btnLogin.classList.add("bg-gray-300", "text-gray-800");
  btnRegister.setAttribute("aria-selected", "true");
  btnRegister.setAttribute("tabindex", "0");
  btnLogin.setAttribute("aria-selected", "false");
  btnLogin.setAttribute("tabindex", "-1");
  registerForm.setAttribute("tabindex", "0");
  loginForm.setAttribute("tabindex", "-1");
});

btnLogin.click();

function saveUsers() {
  localStorage.setItem(usersKey, JSON.stringify(users));
}

function saveHelpRequests() {
  localStorage.setItem(helpRequestsKey, JSON.stringify(helpRequests));
}

function capitalize(str) {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function formatCPF(value) {
  value = value.replace(/\D/g, "");
  if (value.length <= 11) {
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  }
  return value;
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function showFieldError(field) {
  field.classList.add("error");
  setTimeout(() => {
    field.classList.remove("error");
  }, 600);
}

const loginCPFInput = document.getElementById("loginCPF");
const registerCPFInput = document.getElementById("registerCPF");

if (loginCPFInput) {
  loginCPFInput.addEventListener("input", (e) => {
    e.target.value = formatCPF(e.target.value);
  });
}

if (registerCPFInput) {
  registerCPFInput.addEventListener("input", (e) => {
    e.target.value = formatCPF(e.target.value);
  });
}

registerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  formMessage.textContent = "";
  formMessage.classList.remove("text-green-700");
  formMessage.classList.add("text-red-600");

  const name = document.getElementById("registerName").value.trim();
  const email = document.getElementById("registerEmail").value.trim().toLowerCase();
  const cpf = document.getElementById("registerCPF").value.trim();
  const password = document.getElementById("registerPassword").value;
  const deficiencyType = document.getElementById("deficiencyType").value;

  let hasError = false;

  if (!name) {
    showFieldError(document.getElementById("registerName"));
    hasError = true;
  }
  
  if (!email || !validateEmail(email)) {
    showFieldError(document.getElementById("registerEmail"));
    hasError = true;
  }
  
  if (!cpf) {
    showFieldError(document.getElementById("registerCPF"));
    hasError = true;
  }
  
  if (!password) {
    showFieldError(document.getElementById("registerPassword"));
    hasError = true;
  }
  
  if (!deficiencyType) {
    showFieldError(document.getElementById("deficiencyType"));
    hasError = true;
  }

  if (hasError) {
    formMessage.textContent = "Por favor, preencha todos os campos corretamente.";
    return;
  }

  const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
  if (!cpfRegex.test(cpf)) {
    formMessage.textContent = "CPF inválido. Use o formato 000.000.000-00.";
    showFieldError(document.getElementById("registerCPF"));
    return;
  }

  if (users.some((u) => u.email === email)) {
    formMessage.textContent = "Este email já está cadastrado.";
    showFieldError(document.getElementById("registerEmail"));
    return;
  }
  
  if (users.some((u) => u.cpf === cpf)) {
    formMessage.textContent = "Este CPF já está cadastrado.";
    showFieldError(document.getElementById("registerCPF"));
    return;
  }

  const newUser = {
    id: users.length ? Math.max(...users.map((u) => u.id)) + 1 : 1,
    name,
    email,
    cpf,
    password,
    role: "patient",
    deficiencyType,
    examConfirmed: false,
    concernLevel: null,
    plan: null,
    examScheduled: null,
  };
  users.push(newUser);
  saveUsers();

  currentUser = newUser;
  formMessage.classList.remove("text-red-600");
  formMessage.classList.add("text-green-700", "success-feedback");
  formMessage.textContent = `Parabéns, ${name}! Cadastro realizado com sucesso. Bem-vindo(a) à Impulso Vida.`;

  registerForm.reset();
  setTimeout(() => {
    showDashboard();
    showProfile();
    showWelcomeMessage(name);
  }, 800);
});

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  formMessage.textContent = "";
  formMessage.classList.remove("text-green-700");
  formMessage.classList.add("text-red-600");

  const email = document.getElementById("loginEmail").value.trim().toLowerCase();
  const cpf = document.getElementById("loginCPF").value.trim();
  const password = document.getElementById("loginPassword").value;

  let hasError = false;

  if (!email || !validateEmail(email)) {
    showFieldError(document.getElementById("loginEmail"));
    hasError = true;
  }
  
  if (!cpf) {
    showFieldError(document.getElementById("loginCPF"));
    hasError = true;
  }
  
  if (!password) {
    showFieldError(document.getElementById("loginPassword"));
    hasError = true;
  }

  if (hasError) {
    formMessage.textContent = "Por favor, preencha todos os campos corretamente.";
    return;
  }

  const user = users.find(
    (u) => u.email === email && u.cpf === cpf && u.password === password
  );

  if (!user) {
    formMessage.textContent = "Email, CPF ou senha incorretos.";
    showFieldError(document.getElementById("loginEmail"));
    showFieldError(document.getElementById("loginCPF"));
    showFieldError(document.getElementById("loginPassword"));
    return;
  }

  currentUser = user;
  formMessage.textContent = "";
  showDashboard();
  showProfile();
  showWelcomeMessage(user.name);
});

function showDashboard() {
  mainContent.classList.add("hidden");
  aboutSection.classList.add("hidden");
  faqSection.classList.add("hidden");
  depoimentosSection.classList.add("hidden");
  loginSection.classList.add("hidden");
  dashboard.classList.remove("hidden");
  dashboard.classList.add("fade-in");
  formMessage.textContent = "";
  helpRequestMessage.textContent = "";
  adminMessage.textContent = "";
  chatMessages.innerHTML = "";
  faqSelect.value = "";
  planMessage.textContent = "";
  catalogMessage.textContent = "";

  if (currentUser.role === "ceo" || currentUser.role === "co-ceo") {
    btnAdminPanel.classList.remove("hidden");
  } else {
    btnAdminPanel.classList.add("hidden");
  }

  if (currentUser.role === "patient" && currentUser.examConfirmed) {
    btnHelpRequest.classList.remove("hidden");
  } else {
    btnHelpRequest.classList.add("hidden");
  }

  if (currentUser.role === "patient") {
    btnPlans.classList.remove("hidden");
    btnCatalog.classList.remove("hidden");
  } else {
    btnPlans.classList.add("hidden");
    btnCatalog.classList.add("hidden");
  }

  showProfile();
}

btnLogout.addEventListener("click", () => {
  currentUser = null;
  dashboard.classList.add("hidden");
  mainContent.classList.remove("hidden");
  aboutSection.classList.remove("hidden");
  faqSection.classList.remove("hidden");
  depoimentosSection.classList.remove("hidden");
  loginSection.classList.remove("hidden");
  loginForm.reset();
  registerForm.reset();
  formMessage.textContent = "";
  helpRequestMessage.textContent = "";
  adminMessage.textContent = "";
  chatMessages.innerHTML = "";
  faqSelect.value = "";
  planMessage.textContent = "";
  catalogMessage.textContent = "";
  btnLogin.click();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

function showProfile() {
  profileSection.classList.remove("hidden");
  helpRequestSection.classList.add("hidden");
  faqChatSection.classList.add("hidden");
  adminPanelSection.classList.add("hidden");
  plansSection.classList.add("hidden");
  catalogSection.classList.add("hidden");

  profileName.textContent = currentUser.name;
  profileEmail.textContent = currentUser.email;
  profileCPF.textContent = currentUser.cpf;
  profileDeficiency.textContent = currentUser.deficiencyType
    ? capitalize(currentUser.deficiencyType)
    : "Não informado";

  profilePlan.textContent = currentUser.plan ? capitalize(currentUser.plan) : "Nenhum";

  updateConcernLevelUI();

  if (currentUser.examConfirmed) {
    examScheduleForm.style.display = "none";
    examInfo.style.display = "block";
    examMessage.textContent = "";
    if (currentUser.examScheduled) {
      scheduledDateSpan.textContent = currentUser.examScheduled.date;
      scheduledTimeSpan.textContent = currentUser.examScheduled.time;
      scheduledLocationSpan.textContent = currentUser.examScheduled.location;
    } else {
      scheduledDateSpan.textContent = "Confirmado";
      scheduledTimeSpan.textContent = "-";
      scheduledLocationSpan.textContent = "-";
    }
  } else if (currentUser.examScheduled) {
    examScheduleForm.style.display = "none";
    examInfo.style.display = "block";
    scheduledDateSpan.textContent = currentUser.examScheduled.date;
    scheduledTimeSpan.textContent = currentUser.examScheduled.time;
    scheduledLocationSpan.textContent = currentUser.examScheduled.location;
    examMessage.textContent = "Exame agendado, aguardando confirmação do administrador.";
    examMessage.className = "mt-3 text-sm font-medium text-yellow-600 dark:text-yellow-400";
  } else {
    examScheduleForm.style.display = "block";
    examInfo.style.display = "none";
    examMessage.textContent = "";
  }
}

function updateConcernLevelUI() {
  const level = currentUser.concernLevel;
  profileConcern.textContent = level ? capitalize(level) : "Não avaliado";
  profileConcern.className = "inline-flex items-center font-semibold px-4 py-1 rounded-full text-white";

  switch (level) {
    case "amarelo":
      profileConcern.classList.add("bg-yellow-500");
      break;
    case "laranja":
      profileConcern.classList.add("bg-orange-600");
      break;
    case "vermelho":
      profileConcern.classList.add("bg-red-700");
      break;
    default:
      profileConcern.classList.add("bg-gray-500");
  }
}

function showWelcomeMessage(name) {
  welcomeMessage.textContent = `Olá, ${name}! Seja bem-vindo(a) ao seu perfil.`;
  welcomeMessage.classList.add("pulse-once");
  setTimeout(() => {
    welcomeMessage.textContent = "";
    welcomeMessage.classList.remove("pulse-once");
  }, 8000);
}

function showHelpRequest() {
  profileSection.classList.add("hidden");
  helpRequestSection.classList.remove("hidden");
  faqChatSection.classList.add("hidden");
  adminPanelSection.classList.add("hidden");
  plansSection.classList.add("hidden");
  catalogSection.classList.add("hidden");
}

function showFAQChat() {
  profileSection.classList.add("hidden");
  helpRequestSection.classList.add("hidden");
  faqChatSection.classList.remove("hidden");
  adminPanelSection.classList.add("hidden");
  plansSection.classList.add("hidden");
  catalogSection.classList.add("hidden");
}

function showAdminPanel() {
  profileSection.classList.add("hidden");
  helpRequestSection.classList.add("hidden");
  faqChatSection.classList.add("hidden");
  adminPanelSection.classList.remove("hidden");
  plansSection.classList.add("hidden");
  catalogSection.classList.add("hidden");
  renderPatientsTable();
}

function showPlans() {
  profileSection.classList.add("hidden");
  helpRequestSection.classList.add("hidden");
  faqChatSection.classList.add("hidden");
  adminPanelSection.classList.add("hidden");
  plansSection.classList.remove("hidden");
  catalogSection.classList.add("hidden");
}

function showCatalog() {
  profileSection.classList.add("hidden");
  helpRequestSection.classList.add("hidden");
  faqChatSection.classList.add("hidden");
  adminPanelSection.classList.add("hidden");
  plansSection.classList.add("hidden");
  catalogSection.classList.remove("hidden");
}

btnProfile.addEventListener("click", () => {
  showProfile();
});

btnHelpRequest.addEventListener("click", () => {
  showHelpRequest();
});

btnFAQChat.addEventListener("click", () => {
  showFAQChat();
});

btnAdminPanel.addEventListener("click", () => {
  showAdminPanel();
});

btnPlans.addEventListener("click", () => {
  showPlans();
});

btnCatalog.addEventListener("click", () => {
  showCatalog();
});

helpRequestForm.addEventListener("submit", (e) => {
  e.preventDefault();
  helpRequestMessage.textContent = "";
  helpRequestMessage.classList.remove("text-green-700");
  helpRequestMessage.classList.add("text-red-600");

  if (!currentUser) {
    helpRequestMessage.textContent = "Você precisa estar logado para enviar solicitações.";
    return;
  }

  if (currentUser.role !== "patient") {
    helpRequestMessage.textContent = "Apenas pacientes podem enviar solicitações de ajuda.";
    return;
  }

  if (!currentUser.examConfirmed) {
    helpRequestMessage.textContent =
      "Sua deficiência ainda não foi confirmada. Marque um exame para acessar os benefícios.";
    return;
  }

  const helpType = document.getElementById("helpType").value;
  const helpDescription = document.getElementById("helpDescription").value.trim();

  if (!helpType || !helpDescription) {
    helpRequestMessage.textContent = "Por favor, preencha todos os campos.";
    return;
  }

  const newRequest = {
    id: helpRequests.length ? Math.max(...helpRequests.map((r) => r.id)) + 1 : 1,
    userId: currentUser.id,
    helpType,
    helpDescription,
    date: new Date().toISOString(),
    status: "pendente",
  };
  helpRequests.push(newRequest);
  saveHelpRequests();

  helpRequestMessage.classList.remove("text-red-600");
  helpRequestMessage.classList.add("text-green-700", "success-feedback");
  helpRequestMessage.textContent = "Solicitação enviada com sucesso!";

  helpRequestForm.reset();
});

examScheduleForm.addEventListener("submit", (e) => {
  e.preventDefault();
  examMessage.textContent = "";
  const date = examDateInput.value;
  const time = examTimeSelect.value;
  const location = examLocationInput.value;

  if (!date || !time || !location) {
    examMessage.textContent = "Por favor, preencha todos os campos do agendamento.";
    examMessage.className = "mt-3 text-sm font-medium text-red-600 dark:text-red-400";
    return;
  }

  currentUser.examScheduled = { date, time, location };
  const idx = users.findIndex((u) => u.id === currentUser.id);
  if (idx !== -1) {
    users[idx] = currentUser;
    saveUsers();
  }

  examMessage.textContent = "Exame agendado com sucesso! Aguardando confirmação do administrador.";
  examMessage.className = "mt-3 text-sm font-medium text-green-700 dark:text-green-400 success-feedback";

  showProfile();
});

function renderPatientsTable() {
  patientsTableBody.innerHTML = "";
  const patients = users.filter((u) => u.role === "patient");
  if (patients.length === 0) {
    patientsTableBody.innerHTML = `<tr><td colspan="9" class="text-center py-6 text-gray-600 dark:text-gray-400">Nenhum paciente cadastrado.</td></tr>`;
    return;
  }
  patients.forEach((p) => {
    const tr = document.createElement("tr");
    tr.className = "border-b border-green-700 dark:border-green-400 hover:bg-green-100 dark:hover:bg-gray-700";

    const tdName = document.createElement("td");
    tdName.className = "px-6 py-4 border border-green-700 dark:border-green-400";
    tdName.textContent = p.name;
    tr.appendChild(tdName);

    const tdEmail = document.createElement("td");
    tdEmail.className = "px-6 py-4 border border-green-700 dark:border-green-400";
    tdEmail.textContent = p.email;
    tr.appendChild(tdEmail);

    const tdCPF = document.createElement("td");
    tdCPF.className = "px-6 py-4 border border-green-700 dark:border-green-400";
    tdCPF.textContent = p.cpf;
    tr.appendChild(tdCPF);

    const tdDef = document.createElement("td");
    tdDef.className = "px-6 py-4 border border-green-700 dark:border-green-400 capitalize";
    tdDef.textContent = p.deficiencyType;
    tr.appendChild(tdDef);

    const tdExamScheduled = document.createElement("td");
    tdExamScheduled.className = "px-6 py-4 border border-green-700 dark:border-green-400 text-center text-sm";
    if (p.examScheduled) {
      tdExamScheduled.innerHTML = `<div><strong>Data:</strong> ${p.examScheduled.date}</div><div><strong>Hora:</strong> ${p.examScheduled.time}</div><div><strong>Local:</strong> ${p.examScheduled.location}</div>`;
    } else {
      tdExamScheduled.textContent = "Nenhum exame agendado";
    }
    tr.appendChild(tdExamScheduled);

    const tdExam = document.createElement("td");
    tdExam.className = "px-6 py-4 border border-green-700 dark:border-green-400 text-center";
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = p.examConfirmed;
    checkbox.disabled = false;
    checkbox.title = "Marcar para confirmar exame";
    checkbox.className = "cursor-pointer w-5 h-5";
    checkbox.setAttribute("aria-label", `Confirmar exame para ${p.name}`);
    checkbox.addEventListener("change", () => {
      p.examConfirmed = checkbox.checked;
      if (checkbox.checked) {
        p.examScheduled = null;
      }
      saveUsers();
      adminMessage.textContent = "Alteração salva.";
      adminMessage.classList.add("success-feedback");
      setTimeout(() => {
        adminMessage.textContent = "";
        adminMessage.classList.remove("success-feedback");
      }, 3000);
      if (currentUser && currentUser.id === p.id) {
        showProfile();
      }
    });
    tdExam.appendChild(checkbox);
    tr.appendChild(tdExam);

    const tdConcern = document.createElement("td");
    tdConcern.className = "px-6 py-4 border border-green-700 dark:border-green-400 text-center";
    const selectConcern = document.createElement("select");
    selectConcern.className = "bg-green-800 text-white rounded-md px-2 py-1 font-semibold cursor-pointer";
    selectConcern.title = "Selecionar grau de preocupação";
    selectConcern.setAttribute("aria-label", `Selecionar grau de preocupação para ${p.name}`);
    ["", "amarelo", "laranja", "vermelho"].forEach((level) => {
      const option = document.createElement("option");
      option.value = level;
      option.textContent = level ? capitalize(level) : "Não avaliado";
      if (p.concernLevel === level) option.selected = true;
      selectConcern.appendChild(option);
    });
    selectConcern.addEventListener("change", () => {
      p.concernLevel = selectConcern.value || null;
      saveUsers();
      adminMessage.textContent = "Alteração salva.";
      adminMessage.classList.add("success-feedback");
      setTimeout(() => {
        adminMessage.textContent = "";
        adminMessage.classList.remove("success-feedback");
      }, 3000);
      if (currentUser && currentUser.id === p.id) {
        showProfile();
      }
    });
    tdConcern.appendChild(selectConcern);
    tr.appendChild(tdConcern);

    const tdPlan = document.createElement("td");
    tdPlan.className = "px-6 py-4 border border-green-700 dark:border-green-400 text-center";
    const selectPlan = document.createElement("select");
    selectPlan.className = "bg-green-800 text-white rounded-md px-2 py-1 font-semibold cursor-pointer";
    selectPlan.title = "Selecionar plano assinado";
    selectPlan.setAttribute("aria-label", `Selecionar plano assinado para ${p.name}`);
    ["", "bronze", "prata", "ouro"].forEach((plan) => {
      const option = document.createElement("option");
      option.value = plan;
      option.textContent = plan ? capitalize(plan) : "Nenhum";
      if (p.plan === plan) option.selected = true;
      selectPlan.appendChild(option);
    });
    selectPlan.addEventListener("change", () => {
      p.plan = selectPlan.value || null;
      saveUsers();
      adminMessage.textContent = "Alteração salva.";
      adminMessage.classList.add("success-feedback");
      setTimeout(() => {
        adminMessage.textContent = "";
        adminMessage.classList.remove("success-feedback");
      }, 3000);
      if (currentUser && currentUser.id === p.id) {
        showProfile();
      }
    });
    tdPlan.appendChild(selectPlan);
    tr.appendChild(tdPlan);

    const tdActions = document.createElement("td");
    tdActions.className = "px-6 py-4 border border-green-700 dark:border-green-400 text-center";
    const btnDelete = document.createElement("button");
    btnDelete.className =
      "text-red-700 dark:text-red-500 hover:text-red-900 dark:hover:text-red-700 font-semibold focus:outline-none";
    btnDelete.textContent = "Excluir";
    btnDelete.title = "Excluir paciente";
    btnDelete.setAttribute("aria-label", `Excluir paciente ${p.name}`);
    btnDelete.addEventListener("click", () => {
      if (confirm(`Deseja realmente excluir o paciente ${p.name}?`)) {
        users = users.filter((u) => u.id !== p.id);
        saveUsers();
        renderPatientsTable();
        adminMessage.textContent = "Paciente excluído.";
        adminMessage.classList.add("success-feedback");
        setTimeout(() => {
          adminMessage.textContent = "";
          adminMessage.classList.remove("success-feedback");
        }, 3000);
      }
    });
    tdActions.appendChild(btnDelete);
    tr.appendChild(tdActions);

    patientsTableBody.appendChild(tr);
  });
}

const faqAnswers = {
  quemPode:
    "Nosso serviço é exclusivo para pessoas com deficiências devidamente confirmadas por exame realizado em nossa empresa. Também priorizamos pessoas de baixa renda para garantir que o auxílio chegue a quem mais precisa.",
  tiposAjuda:
    "Oferecemos auxílio em tarefas como limpeza da casa, ajuda nas compras, transporte de peso e outras necessidades gerais que facilitem o dia a dia dos nossos usuários.",
  confirmacao:
    "Para garantir a seriedade e a justiça no acesso aos benefícios, cada usuário deve agendar um exame conosco. Após a confirmação médica, o usuário terá acesso completo aos serviços especiais.",
  responsaveis:
    "A Impulso Vida é liderada por Gustavo (Co-CEO) e Caio (CEO), que possuem vasta experiência em gestão social, finanças e inovação para inclusão.",
  cadastro:
    "Você pode criar uma conta na aba de Login/Cadastro. Após o cadastro, será necessário agendar o exame para confirmação da deficiência e, então, poderá solicitar ajuda e acessar todos os recursos.",
  planos:
    "Oferecemos três planos: Bronze, Prata e Ouro, com preços e benefícios variados, incluindo descontos em produtos, limpezas semanais e cestas básicas mensais.",
  beneficios:
    "Os planos oferecem descontos nos produtos vendidos pela Impulso Vida, limpezas de casa semanais e cestas básicas, com benefícios adicionais para deficiências graves.",
};

chatForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const selected = faqSelect.value;
  if (!selected) return;

  appendChatMessage("Você", faqSelect.options[faqSelect.selectedIndex].text, true);
  const answer = faqAnswers[selected] || "Desculpe, não tenho uma resposta para essa pergunta.";
  setTimeout(() => {
    appendChatMessage("Impulso Vida IA", answer, false);
  }, 600);
});

function appendChatMessage(sender, message, isUser) {
  const msgDiv = document.createElement("div");
  msgDiv.className = `mb-4 max-w-[80%] p-4 rounded-lg whitespace-pre-wrap break-words slide-in ${
    isUser
      ? "bg-green-800 text-white self-end ml-auto"
      : "bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200 self-start mr-auto shadow"
  }`;
  msgDiv.textContent = `${sender}: ${message}`;
  chatMessages.appendChild(msgDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

const scrollToTopBtn = document.createElement("button");
scrollToTopBtn.className = "scroll-to-top";
scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollToTopBtn.setAttribute("aria-label", "Voltar ao topo");
scrollToTopBtn.setAttribute("title", "Voltar ao topo");
document.body.appendChild(scrollToTopBtn);

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    scrollToTopBtn.classList.add("show");
  } else {
    scrollToTopBtn.classList.remove("show");
  }
});

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("load", () => {
  const loader = document.querySelector(".loading-spinner");
  if (loader) {
    setTimeout(() => {
      loader.classList.add("hidden");
    }, 500);
  }
  
  const sections = document.querySelectorAll("section, header");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
      }
    });
  }, { threshold: 0.1 });
  
  sections.forEach(section => {
    observer.observe(section);
  });
});
