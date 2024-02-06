'use strict';
//array of objects contain the data that will be used in the app
const data = [
  {
    img: 'images/abo bakr.png',
    name: 'أبو بكر الصديق',
    birth: `الثانيه عشر قبل الهجره`,
    death: 'الثالثه عشر بعد الهجره',
    nickName: 'الصديق',
    paragraph: `أبو بكر الصديق، رضي الله عنه، هو أحد الصحابة الأربعة الذين هم أفضل
    الصحابة بعد الأنبياء في الإسلام. وُلد أبو بكر في مكة المكرمة حوالي سنة
    573 ميلادية، وكان محبًا وصديقًا للنبي محمد صلى الله عليه وسلم منذ
    الصغر. أشهر لقب لأبي بكر هو "الصديق"، الذي أطلقه عليه النبي صلى الله
    عليه وسلم نظرًا لصدقه وإيمانه القوي. كان من بين أول من أسلموا في
    الإسلام، وكان رجلًا غنيًا ونبيلًا في مجتمع مكة. عندما وردت دعوة
    الإسلام، أسلم أبو بكر دون تردد ودعم المسلمين بكل ماله وجهده. في يوم
    الهجرة المشهور، كان أبو بكر الصديق رفيقاً للنبي محمد صلى الله عليه
    وسلم في هجرته إلى المدينة المنورة، وهذا الحدث يعتبر بداية التقويم
    الهجري. عند وفاة النبي صلى الله عليه وسلم، تولى أبو بكر الصديق رضي
    الله عنه مسؤولية الخلافة. وقد قاد المسلمين بحكمة وعدل، ونجح في توسيع
    الدعوة الإسلامية في فترة قصيرة. قام بالجهود الكبيرة لتجميع القرآن
    الكريم في كتاب واحد. أبو بكر الصديق قاد الأمة الإسلامية لمدة حوالي
    أربع سنوات قبل وفاته في عام 634 ميلادية. يُذكر باعتزاز واحترام كبيرين
    في تاريخ الإسلام، ويظل مثالًا للتفاني والإيمان في خدمة الله ورسوله`,
  },
  {
    img: 'images/omar.png',
    name: 'عمر بن الخطاب',
    birth: `اربعين قبل الهجره `,
    death: 'ثلاثه وعشرين بعد الهجره',
    nickName: 'الفاروق',
    paragraph: `عمر بن الخطاب، الفاروق، هو شخصية هامة في تاريخ الإسلام. وُلد في مكة المكرمة حوالي سنة 584 ميلادية، وكان أحد أعداء الإسلام في بداياته. لكن بعد إسلامه في السنة السادسة للدعوة النبوية، أصبح من أبرز الصحابة وشهد هجرته مع النبي محمد صلى الله عليه وسلم إلى المدينة.

تم انتخاب عمر بن الخطاب كليفة ثاني للمسلمين بعد وفاة أبي بكر، وخلال حكمه قاد الدولة الإسلامية بعدالة وحكمة. قام بتوسيع الإسلام في عهده ليشمل فلسطين والشام ومصر وغيرها من المناطق. يُشهد لعمر بن الخطاب بتطبيقه العدالة والإصلاح في النظام القضائي والاقتصادي. استمرت فترة حكمه حتى استشهد في عام 23 هـ، تاركًا إرثًا راسخًا من الإسلام والعدل.`,
  },
  {
    img: 'images/ali.png',
    name: 'علي بن ابي طالب',
    birth: `ثلاثه وعشرين قبل الهجره`,
    death: 'اربعين بعد الهجره',
    nickName: 'حيدره',
    paragraph: `علي بن أبي طالب، رضي الله عنه، شخصية إسلامية عظيمة ومن أبرز الصحابة والخلفاء الراشدين. وُلد في مكة المكرمة حوالي سنة 599 ميلادية، وكان أول من أسلم من الأطفال. زواجه من فاطمة بنت النبي محمد صلى الله عليه وسلم أسس لصلة قرابة فريدة. كان قائدًا بارعًا في المعارك ولُقب بـ "باب المدينة المعلق"، وشغل مناصب رفيعة في فترات مختلفة. تولى الخلافة بعد وفاة عثمان بن عفان، وحكم بعدالة وحكمة. استشهد في المدينة المنورة في سنة 40 هـ. يترك وراءه إرثًا ثريًا من الفضائل والقيم الإسلامية.`,
  },
  {
    img: 'images/othman.png',
    name: ' عثمان بن عفان ',
    birth: `سبع واربعون قبل الهجره`,
    death: ' الخامس والثلاثون بعد الهجره',
    nickName: 'ذي النورين',
    paragraph: `عثمان بن عفان، رضي الله عنه، كان صحابيًا كبيرًا وخليفة ثالث للمسلمين بعد وفاة النبي محمد صلى الله عليه وسلم. وُلد في مكة المكرمة حوالي سنة 576 ميلادية. تزوج من رقية بنت النبي محمد صلى الله عليه وسلم، وهاجر إلى الحبشة معها. اختير كخليفة بعد أبي بكر وعمر، وخلال حكمه نجح في مشروعات اقتصادية وتوسع المسجد النبوي. واجه اضطرابات واحتجاجات، واستشهد في منزله في المدينة المنورة في سنة 35 هـ. تاركًا وراءه إرثًا مهمًا من العدالة والعطاء.`,
  },
  {
    img: 'images/alzober.png',
    name: ' الزبير بن العوام',
    birth: `ثمان وعشرين قبل الهجره`,
    death: ' السادس والثلاثون بعد الهجره',
    nickName: 'حواري رسول الله',
    paragraph: `الزبير بن العوام، رضي الله عنه، من الصحابة البارزين في التاريخ الإسلامي. وُلد في مكة المكرمة حول سنة 594 ميلادية. كان من الصحابة الذين أسلموا في بدايات الدعوة النبوية. اشتهر بشجاعته في المعارك وخدمته الوفية للإسلام. شارك في معظم المعارك الهامة، بدءًا من بدر وحتى وفاة النبي محمد صلى الله عليه وسلم.

    كان له دور بارز في تاريخ الخلافة الإسلامية، وكان أحد أبرز القادة العسكريين في فترة خلافة علي بن أبي طالب. استشهد في معركة الجمل عام 656 ميلادية، حيث قاتل ضد جيش أهل الجمل الذين كانوا يختلفون معه في القضية الخلافية. يُعد الزبير بن العوام من الشخصيات المحترمة في التاريخ الإسلامي، وتُذكر قصته كمثال على الإخلاص والتفاني في خدمة الإسلام.`,
  },
  {
    img: 'images/abdulrhman.png',
    name: '  عبد الرحمن بن عوف',
    birth: `ثلاث واربعون قبل الهجره`,
    death: 'اثنان وثلاثون بعد الهجره',
    nickName: 'الغني الشاكر',
    paragraph: `عبد الرحمن بن عوف، رضي الله عنه، من الصحابة الكبار والتابعين الجليلين في تاريخ الإسلام. وُلد في مكة المكرمة حول سنة 580 ميلادية تقريبًا. كان من الصحابة البارزين الذين أسلموا في بدايات الدعوة النبوية.

    عبد الرحمن بن عوف يشتهر بكفاءاته الاقتصادية والتجارية، حيث كان تاجرًا ناجحًا. أسلم في سن مبكرة وكان من المهاجرين الذين هاجروا إلى الحبشة للابتعاد عن الضغوط القريشية.
    
    شارك في معظم المعارك الهامة مع النبي محمد صلى الله عليه وسلم، وكان له دور بارز في معركة بدر. بعد وفاة النبي، أسهم في فترة الخلافة الراشدة وخدم المسلمين بإخلاص.
    
    عبد الرحمن بن عوف يُذكر كأحد العباقرة الاقتصاديين والتجار في التاريخ الإسلامي، وكرجل أعمال ناجح ومخلص في خدمة دينه ومجتمعه.`,
  },
  {
    img: 'images/khalid.png',
    name: '  خالد بن الوليد',
    birth: `ثلاثون قبل الهجره`,
    death: 'واحد وعشرون بعد الهجره',
    nickName: 'سيف الله المسلول',
    paragraph: `
    خالد بن الوليد بن المغيرة، رضي الله عنه، صحابي كبير وقائد عسكري بارع في تاريخ الإسلام. وُلد في مكة المكرمة حوالي سنة 592 ميلادية. كان يُعرف بلقب "سيف الله المسلول"، نظرًا لشجاعته في المعارك.
    
    كان خالد بن الوليد من القواد الرئيسيين في فترة الخلافة الراشدة، وشارك في معظم المعارك الهامة، بدءًا من بدر وحتى فتح مكة. استمرت خدمته للإسلام حتى وفاته في مدينة حمص بسوريا في سنة 21 هـ.
    
    خالد بن الوليد يُذكر بشجاعته وتكتيكه العسكري، وكان له دور كبير في انتشار الإسلام. بعد إسلامه، استُخدمت قوته العسكرية في خدمة الدين، وأسهم في الانتصارات الكبيرة للمسلمين في العديد من المعارك.`,
  },
  {
    img: 'images/abo abeda.png',
    name: '  ابو عبيده بن الجراح',
    birth: `اربعون قبل الهجره`,
    death: 'الثامنه عشر بعد الهجره',
    nickName: 'أمين الامه',
    paragraph: `أبو عبيدة بن الجراح، رضي الله عنه، من الصحابة الكبار والقادة العسكريين المميزين في تاريخ الإسلام. وُلد في مكة المكرمة وكان من أوائل الذين أسلموا. شارك في معظم المعارك الهامة، بدءًا من بدر وحتى فتح مكة.

    كان أبو عبيدة رجلًا صلبًا وشجاعًا في المعارك، وقد خدم الإسلام بإخلاص. شغل مناصب عسكرية هامة، وكان من الأمناء الذين اعتمد عليهم في العديد من المهام الحساسة. شهد على بيعة العقبة الثانية، وكان من القادة المشاركين في فتح مصر.
    
    رحل عن عالمنا في سنة 18 هـ في مصر. يُذكر أبو عبيدة بن الجراح بإخلاصه وتفانيه في خدمة الإسلام، وكان أحد أبرز الشخصيات التي ساهمت في نجاح الفتوحات الإسلامية في عهد النبي محمد صلى الله عليه وسلم وبعده.`,
  },
  {
    img: 'images/saed.png',
    name: '  سعيد بن زيد',
    birth: `الثاني والعشرون قبل الهجره`,
    death: 'الواحد والخمسون بعد الهجره',
    nickName: 'لا يوجد لقب محدد',
    paragraph: `سعيد بن زيد، رضي الله عنه، من الصحابة الجليلين في التاريخ الإسلامي. شهد بيعة العقبة الثانية وكان من الذين أسلموا في مكة المكرمة في بدايات الدعوة النبوية. تميز بالعلم والفضيلة، وكان من الأساتذة في فقه الصحابة.

شارك في معظم المعارك الهامة، وكان له دور بارز في الفتوحات الإسلامية. بعد وفاة النبي محمد صلى الله عليه وسلم، استمر في خدمة المسلمين وشغل مناصب قيادية. وُلد سنة 22 قبل الهجرة وتوفي في سنة 91 هـ.

سعيد بن زيد يُذكر بحكمته ومعرفته، وكان أحد روافع الإسلام وعلمائه في العصر النبوي والخلافة الراشدة.`,
  },
  {
    img: 'images/abn amr.jpg',
    name: '  القعقاع بن عمرو التميمي',
    birth: `الرابع والخمسون قبل الهجره`,
    death: 'الخامس والاربعون قبل الهجره',
    nickName: 'لا يوجد لقب محدد',
    paragraph: `
القعقاع بن عمرو التميمي، رضي الله عنه، من الصحابة البارزين في تاريخ الإسلام. شهد بيعة العقبة الثانية، وكان من المسلمين الذين هاجروا إلى الحبشة للابتعاد عن ضغوط قريش. أسلم في مكة المكرمة في بدايات الدعوة النبوية.

شارك في معظم المعارك الهامة، وكان له دور بارز في فتح مصر. عاش حياة تميزت بالإخلاص والتفاني في خدمة الإسلام. استمر في خدمة المسلمين بعد وفاة النبي محمد صلى الله عليه وسلم، وكان من الأساتذة في الفقه والدين. توفي في العصر الراشد، تاركًا إرثًا عظيمًا في تاريخ الإسلام.`,
  },
];
//variable to store current data being showed
let currentData;
//functions for element selecting
const selectElement = selector => document.querySelector(selector);
const selectElements = selector => document.querySelectorAll(selector);
//function for removing and adding classes the function take the element and the class name to be added or removed
const removeClass = (element, className) => element.classList.remove(className);
const addClass = (element, className) => element.classList.add(className);
//selecting all required elements / elements
const boxes = selectElements('.box');
const modalWindow = selectElement('.window');
const overlay = selectElement('.overlay');
const closeBtn = selectElement('.fa-x');
const img = selectElement('.photo');
const sName = selectElement('.name');
const birthDate = selectElement('.born');
const deathDate = selectElement('.death');
const nickName = selectElement('.nickname');
const infoBox = selectElement('.paragraph');
const arrows = selectElements('.arrow');
const leftArrow = selectElement('.left');
const rightArrow = selectElement('.right');
// function for inject data in elements
const dataInjection = function () {
  switch (currentData) {
    case 0:
      addClass(leftArrow, 'hidden');
      removeClass(rightArrow, 'hidden');
      break;
    case 9:
      addClass(rightArrow, 'hidden');
      removeClass(leftArrow, 'hidden');
      break;
    default:
      removeClass(leftArrow, 'hidden');
      removeClass(rightArrow, 'hidden');
  }

  const boxData = data[currentData];
  img.src = boxData.img;
  sName.textContent = boxData.name;
  birthDate.textContent = boxData.birth;
  deathDate.textContent = boxData.death;
  nickName.textContent = boxData.nickName;
  infoBox.textContent = boxData.paragraph;
};

//boxes clicking event handler
const boxClick = function (e) {
  currentData = Number(e.target.dataset.number);
  removeClass(modalWindow, 'hidden');
  removeClass(overlay, 'hidden');
  dataInjection();
};
//handeling box clicking
boxes.forEach(function (box) {
  box.addEventListener('click', boxClick);
});
//arrows clicking event handler
const arrowClick = function (e) {
  currentData = e.target.classList.contains('left')
    ? --currentData
    : ++currentData;
  dataInjection();
};
//handling arrow clicking
arrows.forEach(function (arrow) {
  arrow.addEventListener('click', arrowClick);
});
//handeling closing the window
//function for closing the window and the overlay
const closeWindow = function () {
  addClass(modalWindow, 'hidden');
  addClass(overlay, 'hidden');
};
//escape button event handler
const escPress = function (e) {
  if (e.key === 'Escape' && !modalWindow.classList.contains('hidden')) {
    closeWindow();
  }
};
//close button handling
closeBtn.addEventListener('click', closeWindow);
//overlay clicking handling
overlay.addEventListener('click', closeWindow);
//clicking escape button handling
document.addEventListener('keydown', escPress);
