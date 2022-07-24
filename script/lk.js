const lkContainer = document.querySelector('.lk__container');
const linerLoader = document.querySelector('.liner-loader');

document.querySelectorAll('.lk__sidebar-link_cursive').forEach((e) => {
  e.parentElement.style.marginTop = '1vw';
});


for (let i = 0; i < 4; i++) {
  document.querySelectorAll('.lk__sidebar-link')[i].addEventListener('click', (e) => {
    document.querySelector('.lk__sidebar-link_active')
      .parentElement.querySelector('.lk__icon svg path')
      .style.fill = '#7C8ADC';
    document.querySelector('.lk__sidebar-link_active').classList.remove('lk__sidebar-link_active');
    document.querySelectorAll('.lk__sidebar-link')[0].classList.add('lk__sidebar-link_active');
    document.querySelectorAll('.lk__sidebar-link')[0]
      .parentElement.querySelector('.lk__icon svg path')
      .style.fill = '#FF7759';
  });
};

for (let i = 4; i < document.querySelectorAll('.lk__sidebar-link').length; i++) {
  document.querySelectorAll('.lk__sidebar-link')[i].addEventListener('click', (e) => {
    document.querySelector('.lk__sidebar-link_active')
      .parentElement.querySelector('.lk__icon svg path')
      .style.fill = '#7C8ADC';
    document.querySelector('.lk__sidebar-link_active').classList.remove('lk__sidebar-link_active');
    e.target.classList.add('lk__sidebar-link_active');
    e.target.parentElement.querySelector('.lk__icon svg path').style.fill = '#FF7759';
  });
};

document.querySelectorAll('.lk__sidebar-link')[0].addEventListener('click', (e) => {
  lkContainer.innerHTML = 'Здесь ничего нет';
});

document.querySelectorAll('.lk__sidebar-link')[1].addEventListener('click', (e) => {
  lkContainer.innerHTML = `<p style="font-size: 1.1rem;font-weight: 500">Личные данные</p>
  <div style="width: 100%;border: 1px solid #adadad;margin-top: 1.3rem;border-radius: 1rem;padding: 2rem 3rem;">
    <div style="display: flex;column-gap: 3rem;">
      <div style="display: flex;flex-direction: column;justify-content: space-between;border-right: 1px solid #adadad;width: 15rem;">
        <p>Иванов</p>
        <p>Иван</p>
        <p>Иванович</p>
      </div>
      <div style="display: flex;flex-direction: column;justify-content: space-between;border-right: 1px solid #adadad;width: 15rem;">
        <p>01.01.1900</p>
        <p>муж</p>
      </div>
      <div style="display: flex;flex-direction: column;justify-content: space-between;">
        <p>8 999 888 77 66</p>
        <p>email@email.ru</p>
      </div>
    </div>
    <button style="transition: 0.6s;background: #3F464C;color: #fff;margin-top: 2.5rem;padding: 0.7rem 1rem;border-radius: 5rem;cursor: pointer;">Редактировать</button>
    <style>
      button:hover {
        opacity: 0.7;
      }
    </style>
  </div>`;
});


document.querySelectorAll('.lk__sidebar-link')[2].addEventListener('click', (e) => {
  lkContainer.innerHTML = `<p style="font-size: 1.1rem;font-weight: 500">Управление подписками</p>
  <div style="width: 100%;border: 1px solid #adadad;margin-top: 1.3rem;border-radius: 1rem;padding: 2rem 3rem;">
    <div style="width: 78%;display: flex;flex-direction: column;row-gap: 1rem;">
      <div style="display: flex;justify-content: space-between;align-items: center;">
        <p>Рассылки</p>
        <button style="width: 10rem;transition: 0.6s;cursor: pointer;padding: 0.7rem 0;color: #fff;border-radius: 5rem;"
          class="button_off">Отключить</button>
      </div>
      <div style="display: flex;justify-content: space-between;align-items: center;">
        <p>Новости</p>
        <button  style="width: 10rem;transition: 0.6s;cursor: pointer;padding: 0.7rem 0;color: #fff;border-radius: 5rem;"
          class="button_on">Подключить</button>
      </div>
      <div style="display: flex;justify-content: space-between;align-items: center;">
        <p>Уведомления</p>
        <button
          style="width: 10rem;transition: 0.6s;cursor: pointer;padding: 0.7rem 0;color: #fff;border-radius: 5rem;"
          class="button_off">Отключить</button>
      </div>
    </div>

    <style>
      .button_off {
        background: #3F464C;
      }

      .button_on {
        background: #FF7759;
      }

      button:hover {
        opacity: 0.7;
      }
    </style>
  </div>`;

  document.querySelectorAll('.lk button').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      if (e.target.classList.contains('button_off')) {
        e.target.classList.remove('button_off');
        e.target.classList.add('button_on');
        e.target.innerText = 'Подключить';
      } else {
        e.target.classList.remove('button_on');
        e.target.classList.add('button_off');
        e.target.innerText = 'Отключить';
      }
    });
  });
});



document.querySelectorAll('.lk__sidebar-link')[3].addEventListener('click', (e) => {
  lkContainer.innerHTML = `<p style="font-size: 1.1rem;font-weight: 500">Имунный анамнез</p>
  <p style="margin-top: 1.3rem;max-width: 90%;">Просим Вас ответить на несколько вопросов, чтобы алгоритм установил персональные связи между различными
    видами данных и предложил индивидуальные рекомендации</p>
  <div style="width: 100%;border: 1px solid #adadad;margin-top: 2rem;border-radius: 1rem;padding: 2rem 1rem 2rem 3rem;">
    <form class="scroll-bk-1" style="max-height: 26rem;overflow: auto;padding: 0 2rem 0 7px;">
      <p style="font-weight: 600;margin-top: 0.5rem;font-size: 1.1rem;">Есть ли в анамнезе любое хроническое инфекционное заболевание<br> (органов дыхания, ЛОР-органов,
        пищеварительного тракта, мочеполовой системы)?</p>
      <p style="margin-top: 1rem;">Наличие даже одного заболевания может свидетельствовать о стойком иммунодефицитном состоянии. Требуется
        исключить и устранить иммунодефицит при назначении антибактериальной терапии</p>
      <div style="display: flex;column-gap: 3rem;margin-top: 1.6rem;">
        <div class="container-check">
          <input type="checkbox" style="transform: scale(2);margin-right: 1rem;" class="check-inf">
          <label>Точно НЕТ</label>
        </div>
        <div class="container-check">
          <input type="checkbox" style="transform: scale(2);margin-right: 1rem;" class="check-inf">
          <label>Не знаю/ не уверен/ не помню (напомнить через__дней)</label>
        </div>
      </div>
      <div class="container-check" style="margin-top: 2rem;">
        <input type="checkbox" style="transform: scale(2);margin-right: 1rem;" class="check-inf">
        <label>Точно ДА</label>
      </div>
      <input type="text" placeholder="Указать какое именно" style="border: none;width: 100%;background: #E0E2E9;border-radius: 5rem;margin-top: 1rem;padding: 0.5rem 1rem;">
      <p style="margin-top: 2rem;font-weight: 600;font-size: 1.1rem;">Есть ли в анамнезе аллергическое заболевание?</p>
      <p style="margin-top: 1rem;">Требуется для дополнительной диагностики силы и сбалансированности иммунной системы</p>
      <div style="display: flex;column-gap: 3rem;margin-top: 1.6rem;">
        <div class="container-check">
          <input type="checkbox" style="transform: scale(2);margin-right: 1rem;" class="check-alg">
          <label>Точно НЕТ</label>
        </div>
        <div class="container-check">
          <input type="checkbox" style="transform: scale(2);margin-right: 1rem;" class="check-alg">
          <label>Не знаю/ не уверен/ не помню (напомнить через__дней)</label>
        </div>
      </div>
      <div class="container-check" style="margin-top: 2rem;">
        <input type="checkbox" style="transform: scale(2);margin-right: 1rem;" class="check-alg">
        <label>Точно ДА</label>
      </div>
      <input type="text" placeholder="Указать какое именно" style="border: none;width: 100%;background: #E0E2E9;border-radius: 5rem;margin-top: 1rem;padding: 0.5rem 1rem;">
      <button style="margin-top: 3.5rem;width: 10rem;background: #3F464C;border-radius: 5rem;padding: 0.6rem 0;color: #fff;">Отправить</button>
    </form>
  </div>
  <style>
    .scroll-bk-1 {
      scrollbar-color: #E0E2E9 #fff;
    }
    .scroll-bk-1::-webkit-scrollbar-thumb {
      background: #E0E2E9;
    }
    button:hover {
      opacity: 0.7;
    }
  </style>`;

  document.querySelectorAll('.check-inf').forEach((check) => {
    check.addEventListener('click', () => {
      document.querySelectorAll('.check-inf').forEach((el) => {
        el.checked = false;
      });
      check.checked = true;
    });
  });

  document.querySelectorAll('.check-alg').forEach((check) => {
    check.addEventListener('click', () => {
      document.querySelectorAll('.check-alg').forEach((el) => {
        el.checked = false;
      });
      check.checked = true;
    });
  });

  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
  });
});

window.onload = function() {
  linerLoader.style.zIndex = '-9999';
  linerLoader.style.opacity = '0';
}