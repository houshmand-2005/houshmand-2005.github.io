var before = document.getElementById("before");
var liner = document.getElementById("liner");
var command = document.getElementById("typer");
var textarea = document.getElementById("texter");
var terminal = document.getElementById("terminal");

var git = 0;
var pw = false;
let pwd = false;
var commands = [];

setTimeout(function () {
  loopLines(banner, "", 80);
  textarea.focus();
}, 100);

window.addEventListener("keyup", enterKey);

console.log(
  "%cHello :)",
  "color: #04ff00; font-weight: bold; font-size: 24px;"
);

//init
textarea.value = "";
command.innerHTML = textarea.value;

function enterKey(e) {
  if (e.keyCode == 181) {
    document.location.reload(true);
  }
  if (pw) {
    let et = "*";
    let w = textarea.value.length;
    command.innerHTML = et.repeat(w);
  } else {
    if (e.keyCode == 13) {
      commands.push(command.innerHTML);
      git = commands.length;
      addLine(
        "houshmand@houshmand2005:~$ " + command.innerHTML,
        "no-animation",
        0
      );
      commander(command.innerHTML.toLowerCase());
      command.innerHTML = "";
      textarea.value = "";
    }
    if (e.keyCode == 38 && git != 0) {
      git -= 1;
      textarea.value = commands[git];
      command.innerHTML = textarea.value;
    }
    if (e.keyCode == 40 && git != commands.length) {
      git += 1;
      if (commands[git] === undefined) {
        textarea.value = "";
      } else {
        textarea.value = commands[git];
      }
      command.innerHTML = textarea.value;
    }
  }
}

function commander(cmd) {
  switch (cmd.toLowerCase()) {
    case "help":
      loopLines(help, "color2 margin", 80);
      break;
    case "whois":
      loopLines(whois, "color2 margin", 80);
      break;
    case "social":
      loopLines(social, "color2 margin", 80);
      break;
    case "projects":
      loopLines(projects, "color2 margin", 80);
      break;
    case "history":
      addLine("<br>", "", 0);
      loopLines(commands, "color2", 80);
      addLine("<br>", "command", 80 * commands.length + 50);
      break;
    case "email":
      addLine(
        'Opening mailto:<a href="mailto:houshmand2005@gmail.com">houshmand2005@gmail.com</a>...',
        "color2",
        80
      );
      newTab(email);
      break;
    case "clear":
      setTimeout(function () {
        terminal.innerHTML = '<a id="before"></a>';
        before = document.getElementById("before");
      }, 1);
      break;
    // socials
    case "pypi":
      addLine("Opening PyPi...", "color2", 0);
      newTab("https://pypi.org/project/py2hlog/");
      break;
    case "github":
      addLine("Opening GitHub...", "color2", 0);
      newTab(github);
      break;
    case "rmzhash":
      addLine("Opening RmzHash...", "color2", 0);
      newTab("http://rmzhash.pythonanywhere.com/");
      break;
    case "ls":
      addLine("css  index.html  js", "color2", 0);
      break;
    case "cd css":
      addLine("This is not a real terminal :)", "color2", 0);
      break;
    case "cd js":
      addLine("This is not a real terminal :)", "color2", 0);
      break;
    case "pwd":
      addLine("/", "color2", 0);
      break;
    case "game":
      addLine("play some mario at :  https://supermarioplay.com/", "color2", 0);
      break;
    case "cat index.html":
      addLine(
        "you can see it from here : https://github.com/houshmand-2005/houshmand-2005.github.io/blob/houshmand/index.html",
        "color2",
        0
      );
      break;
    case "ping 8.8.8.8":
      addLine("Pinging 8.8.8.8 with 32 bytes of data:", "color2", 80);
      addLine("Reply from 8.8.8.8: bytes=32 time=39ms TTL=53", "color2", 80);
      addLine("Reply from 8.8.8.8: bytes=32 time=37ms TTL=53", "color2", 80);
      addLine("But this is not real :)", "color2", 80);
      break;
    case "admin":
      addLine("-___-", "color2", 80);
      break;
    case "houshmand":
      addLine("yes?", "color2", 80);
      break;
    case "time":
      var today = new Date();
      addLine(String(today), "color2", 80);
      break;
    default:
      addLine(
        '<span class="inherit">Command not found. For a list of commands, type <span class="command">\'help\'</span>.</span>',
        "error",
        100
      );
      break;
  }
}

function newTab(link) {
  setTimeout(function () {
    window.open(link, "_blank");
  }, 500);
}

function addLine(text, style, time) {
  var t = "";
  for (let i = 0; i < text.length; i++) {
    if (text.charAt(i) == " " && text.charAt(i + 1) == " ") {
      t += "&nbsp;&nbsp;";
      i++;
    } else {
      t += text.charAt(i);
    }
  }
  setTimeout(function () {
    var next = document.createElement("p");
    next.innerHTML = t;
    next.className = style;

    before.parentNode.insertBefore(next, before);

    window.scrollTo(0, document.body.offsetHeight);
  }, time);
}

function loopLines(name, style, time) {
  name.forEach(function (item, index) {
    addLine(item, style, index * time);
  });
}
