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
      <button style="transition: 0.6s;margin-top: 3.5rem;width: 10rem;background: #3F464C;border-radius: 5rem;padding: 0.6rem 0;color: #fff;cursor: pointer;">Отправить</button>
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

document.querySelectorAll('.lk__sidebar-link')[5].addEventListener('click', (e) => {
  lkContainer.innerHTML = `<div class="ras-container" style="max-height: 40rem;padding-left: 1.5rem;overflow: auto;"></div>
<style>
  .ras-container {
    scrollbar-color: #E0E2E9 #fff;
  }

  .ras-container::-webkit-scrollbar-thumb {
    background: #E0E2E9;
  }

  button:hover {
    opacity: 0.7;
  }
</style>`
  const arr = [{ 'j': 1 }, {}, {}, {}];
  arr.forEach((el, ind) => {
    if (ind === 0) {
      document.querySelector('.ras-container').insertAdjacentHTML('afterbegin', `<div style="border-left: 1px solid #adadad;padding-right: 1.3rem;padding-bottom: 1.5rem;">
      <p style="padding: 0.6rem 1.3rem;display: inline-block;background: #FF7759;color: #fff;margin-left: -1.5rem;">01.01.2022</p>
      <div style="border: 1px solid #adadad;border-radius: 1rem;margin-top: 2rem;margin-left: 2rem;padding: 3.2rem 4rem 3.2rem 1.2rem;display: flex;align-items: flex-end;justify-content: space-between;">
        <div style="position: relative;margin-bottom: 1rem;">
          <div style="display: flex;">
            <p style="width: 13rem;font-size: 1.1rem;">Иммунограмма</p>
            <div style="margin-left: 3.5rem;">
              <h3 style="font-size: 1rem;">Иммуный профиль</h3>
              <p>120</p>
            </div>
          </div>
          <div style="display: flex;margin-top: 1.5rem;">
            <p style="width: 13rem;font-size: 1.1rem;">Расшифровка</p>
            <div style="margin-left: 3.5rem;">
              <h3 style="font-size: 1rem;">Состояние иммунитета</h3>
              <p>Идеальный</p>
            </div>
          </div>
          <div style="display: flex;margin-top: 1.5rem;">
            <p style="width: 13rem;font-size: 1.1rem;">Рекомендации</p>
            <div style="margin-left: 3.5rem;">
              <p>Какие-то очень коротко</p>
            </div>
          </div>
          <span style="position: absolute;top: 0;bottom: 0;width: 2px;background: #dddddd;border-radius: 5px;left: 13rem;"></span>
        </div>
        <button style="transition: 0.6s;width: 10rem;background: #3F464C;border-radius: 5rem;padding: 0.6rem 0;color: #fff;cursor: pointer;">Подробнее</button>
      </div>
      ${el.j ? `<div style="display: flex;align-items: center;margin-top: 1.5rem;margin-bottom: 1.5rem;">
      <div style="width: 2.6rem;height: 2.6rem;margin-right: 1rem;margin-left: -1.4rem;">
        <svg width="100%" height="100%" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.9992 0C14.6951 0 9.60822 2.10705 5.85764 5.85763C2.10706 9.60821 6.217e-08 14.6951 6.217e-08 19.9992V19.9992C-0.000206977 22.6244 0.516699 25.2238 1.52121 27.6492C2.52571 30.0746 3.99815 32.2783 5.85441 34.1346C7.71067 35.9908 9.9144 37.4633 12.3398 38.4678C14.7651 39.4723 17.3646 39.9892 19.9898 39.989H20.0102C22.6353 39.989 25.2347 39.4719 27.66 38.4673C30.0853 37.4628 32.2889 35.9903 34.1451 34.1341C36.0014 32.2779 37.4738 30.0742 38.4784 27.649C39.4829 25.2237 40 22.6243 40 19.9992V19.9992C39.9996 14.6949 37.8922 9.60807 34.1414 5.85754C30.3905 2.107 25.3035 -1.64744e-08 19.9992 0V0Z" fill="#FF7759"></path>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M29.6406 22.2634C29.0688 22.2634 28.5203 22.0322 28.1159 21.6206C27.7115 21.2091 27.4844 20.651 27.4844 20.069V15.6803C27.4844 13.6433 26.6892 11.6898 25.2739 10.2495C23.8586 8.80915 21.9391 8 19.9375 8C17.9359 8 16.0164 8.80915 14.601 10.2495C13.1857 11.6898 12.3906 13.6433 12.3906 15.6803V20.069C12.3906 20.651 12.1635 21.2091 11.7591 21.6206C11.3547 22.0322 10.8062 22.2634 10.2344 22.2634C9.37657 22.2634 8.55389 22.6101 7.94732 23.2274C7.34076 23.8447 7 24.6819 7 25.5549C7 26.4279 7.34076 27.2651 7.94732 27.8824C8.55389 28.4997 9.37657 28.8465 10.2344 28.8465H16.8972C17.1259 29.4782 17.5395 30.0234 18.0822 30.4084C18.6249 30.7935 19.2705 31 19.9321 31C20.5937 31 21.2393 30.7935 21.782 30.4084C22.3247 30.0234 22.7383 29.4782 22.967 28.8465H29.6406C30.4984 28.8465 31.3211 28.4997 31.9277 27.8824C32.5342 27.2651 32.875 26.4279 32.875 25.5549C32.875 24.6819 32.5342 23.8447 31.9277 23.2274C31.3211 22.6101 30.4984 22.2634 29.6406 22.2634ZM29.6406 26.6521H10.2344C9.94844 26.6521 9.67421 26.5365 9.47202 26.3307C9.26984 26.125 9.15625 25.8459 9.15625 25.5549C9.15625 25.2639 9.26984 24.9848 9.47202 24.7791C9.67421 24.5733 9.94844 24.4577 10.2344 24.4577C11.3781 24.4577 12.475 23.9953 13.2838 23.1723C14.0925 22.3493 14.5469 21.233 14.5469 20.069V15.6803C14.5469 14.2253 15.1148 12.8299 16.1257 11.8011C17.1367 10.7723 18.5078 10.1944 19.9375 10.1944C21.3672 10.1944 22.7383 10.7723 23.7492 11.8011C24.7602 12.8299 25.3281 14.2253 25.3281 15.6803V20.069C25.3281 21.233 25.7825 22.3493 26.5912 23.1723C27.4 23.9953 28.4969 24.4577 29.6406 24.4577C29.9266 24.4577 30.2008 24.5733 30.403 24.7791C30.6052 24.9848 30.7188 25.2639 30.7188 25.5549C30.7188 25.8459 30.6052 26.125 30.403 26.3307C30.2008 26.5365 29.9266 26.6521 29.6406 26.6521Z" fill="white"></path>
        </svg>
      </div>
      <p style="font-size: 1.1rem;line-height: 1;">Уведомление о чем то</p>
    </div>` : ''}
    </div>`);
    } else {
      console.log('F');
      document.querySelector('.ras-container').insertAdjacentHTML('beforeend', `<div style="${arr.length - 1 > ind ? 'border-left: 1px solid #adadad;' : ''}padding-right: 1.3rem;padding-bottom: 1.5rem;">
      <p style="padding: 0.6rem 1.3rem;display: inline-block;background: #ABABAD;color: #fff;margin-left: -1.5rem;">01.01.2022</p>
      <div style="border: 1px solid #adadad;border-radius: 1rem;margin-top: 2rem;margin-left: 2rem;padding: 3.2rem 4rem 3.2rem 1.2rem;display: flex;align-items: flex-end;justify-content: space-between;margin-bottom: 1.5rem;">
        <div style="position: relative;margin-bottom: 1rem;">
          <div style="display: flex;">
            <p style="width: 13rem;font-size: 1.1rem;">Иммунограмма</p>
            <div style="margin-left: 3.5rem;">
              <h3 style="font-size: 1rem;">Иммуный профиль</h3>
              <p>120</p>
            </div>
          </div>
          <div style="display: flex;margin-top: 1.5rem;">
            <p style="width: 13rem;font-size: 1.1rem;">Расшифровка</p>
            <div style="margin-left: 3.5rem;">
              <h3 style="font-size: 1rem;">Состояние иммунитета</h3>
              <p>Идеальный</p>
            </div>
          </div>
          <div style="display: flex;margin-top: 1.5rem;">
            <p style="width: 13rem;font-size: 1.1rem;">Рекомендации</p>
            <div style="margin-left: 3.5rem;">
              <p>Какие-то очень коротко</p>
            </div>
          </div>
          <span style="position: absolute;top: 0;bottom: 0;width: 2px;background: #dddddd;border-radius: 5px;left: 13rem;"></span>
        </div>
        <button style="transition: 0.6s;width: 10rem;background: #3F464C;border-radius: 5rem;padding: 0.6rem 0;color: #fff;cursor: pointer;">Подробнее</button>
      </div>
    </div>`)
    }
  });
});

setTimeout(() => {
  linerLoader.style.zIndex = '-9999';
  linerLoader.style.opacity = '0';
}, 3000);