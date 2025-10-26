const vscode = require('vscode');

function activate(context) {
  const quotes = [
    'Волк не боится багов — он их дебажит. — Джейсон Стетхем',
    'Если ты компилируешься с ошибками — значит, ты растёшь. Даже волки иногда спотыкаются. — Джейсон Стетхем',
    'Волк не спрашивает, где документация. Волк пишет свой код. — Джейсон Стетхем',
    'Когда вокруг одни овцы, будь волком, который пишет чистый код. — Джейсон Стетхем',
    'Настоящий айтишник не боится темноты — он просто включает тёмную тему. — Джейсон Стетхем',
    'Волк не ждёт вдохновения, он просто пушит в гитхаб. — Джейсон Стетхем',
    'Программисты всех стран - соединяйтесь! - Владимир Ленин',
    'Релиз осилит идущий. - Лао-Цзы',
    'Пиши, что должен, и пусть CI/CD решает, что будет. - Марк Аврелий'
  ];

  let disposable = vscode.workspace.onDidSaveTextDocument(() => {
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    vscode.window.setStatusBarMessage(quote, 5000);
  });

  context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
  activate,
  deactivate
};