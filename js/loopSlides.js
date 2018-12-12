function renderSlide(
  codeSlides,
  consoleArray,
  callStackArray,
  webApiArray,
  queueArray
) {
  let markup = `
              <div class="js-model d-flex">
                <div class="js-model__block">
                  <div class="console d-flex column">
                    <div class="console__caption">Browser Console</div>
                    <ul class="console__output">
                      ${consoleArray.reduce(
                        (res, str) =>
                          res + '<li class="console__item">' + str + "</li>",
                        ""
                      )}
                    </ul>
                  </div>
                </div>
                <div class="js-model__block d-flex column">
                  <div class="d-flex h-100 mb-30">
                    <div class="custom-block d-flex column flex-1">
                      <div class="custom-block__caption">Call Stack</div>
                      <ul class="custom-block__body d-flex column-reverse">
                      ${callStackArray.reduce(
                        (res, str) =>
                          res +
                          '<li class="custom-block__item">' +
                          str +
                          "</li>",
                        ""
                      )}
                      </ul>
                    </div>
                    <div class="custom-block d-flex column flex-1">
                      <div class="custom-block__caption">Web APIs</div>
                      <ul class="custom-block__body d-flex column">
                      ${webApiArray.reduce(
                        (res, str) =>
                          res +
                          '<li class="custom-block__item custom-block__item_bg-orange d-flex align-center justify-center">' +
                          str +
                          "</li>",
                        ""
                      )}
                      </ul>
                    </div>
                  </div>
                  <div class="d-flex">
                    <div class="custom-block d-flex column">
                      <div class="custom-block__caption">Event Loop</div>
                      <img src="https://i.imgur.com/zYp98NX.png" alt="" />
                    </div>
                    <div class="custom-block d-flex column flex-auto">
                      <div class="custom-block__caption">Callback Queue</div>
                      <ul
                        class="custom-block__body custom-block__body_no-border custom-block__body_background-grey d-flex align-center"
                      >
                      ${queueArray.reduce(
                        (res, str) =>
                          res +
                          '<li class="custom-block__item">' +
                          str +
                          "</li>",
                        ""
                      )}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <aside class="notes">
              Web API runs in a different area of the browser process and it able 
              to run concurrently with the code that is running on the Javascript side. 
              The browser is able to run multiple things concurrent 
              (the WebAPI, the event loop, the rendering engine and the Javascript processor to list a few).  
              But the JS processor does NOT have other threads in the background, 
              in its limited view it can only do one thing at a 
              time which is defined as what's on the top of the call stack.
              <br><br>

              </aside>
    `;
  const newSlide = document.createElement("section");
  newSlide.className = codeSlides;
  newSlide.setAttribute("data-background-color", "#ffffff");
  newSlide.setAttribute("data-transition", "none");
  newSlide.innerHTML = markup;
  const elem = document.querySelectorAll("." + codeSlides);
  const lastCodeSLide = elem[elem.length - 1];
  lastCodeSLide.parentNode.insertBefore(newSlide, lastCodeSLide.nextSibling);
}

function generateLoopSlides() {
  const codeSlides = "event-loop-code";
  let consoleArray = [];
  let callStackArray = [];
  let webApiArray = [];
  let queueArray = [];
  // 1 event loop slide
  renderSlide(
    codeSlides,
    consoleArray,
    callStackArray,
    webApiArray,
    queueArray
  );
  callStackArray.push("main()");
  renderSlide(
    codeSlides,
    consoleArray,
    callStackArray,
    webApiArray,
    queueArray
  );
  // 2 event loop slide
  callStackArray.push("console.log('Hi')");
  renderSlide(
    codeSlides,
    consoleArray,
    callStackArray,
    webApiArray,
    queueArray
  );
  // 3 event loop slide
  consoleArray.push("Hi");
  renderSlide(
    codeSlides,
    consoleArray,
    callStackArray,
    webApiArray,
    queueArray
  );
  // 4 event loop slide
  callStackArray.pop();
  renderSlide(
    codeSlides,
    consoleArray,
    callStackArray,
    webApiArray,
    queueArray
  );
  // 5 event loop slide
  callStackArray.push("setTimeout rsschool");
  renderSlide(
    codeSlides,
    consoleArray,
    callStackArray,
    webApiArray,
    queueArray
  );
  // 6 event loop slide
  webApiArray.push("timer <span>rsschool</span>");
  renderSlide(
    codeSlides,
    consoleArray,
    callStackArray,
    webApiArray,
    queueArray
  );
  // 7 event loop slide
  callStackArray.pop();
  renderSlide(
    codeSlides,
    consoleArray,
    callStackArray,
    webApiArray,
    queueArray
  );
  // 8 event loop slide
  callStackArray.push("console.log('There')");
  renderSlide(
    codeSlides,
    consoleArray,
    callStackArray,
    webApiArray,
    queueArray
  );
  // 9 event loop slide
  consoleArray.push("There");
  renderSlide(
    codeSlides,
    consoleArray,
    callStackArray,
    webApiArray,
    queueArray
  );
  // 10 event loop slide
  callStackArray.pop();
  renderSlide(
    codeSlides,
    consoleArray,
    callStackArray,
    webApiArray,
    queueArray
  );
  callStackArray.pop();
  renderSlide(
    codeSlides,
    consoleArray,
    callStackArray,
    webApiArray,
    queueArray
  );
  // 11 event loop slide
  webApiArray.pop();
  queueArray.push("rsschool");
  renderSlide(
    codeSlides,
    consoleArray,
    callStackArray,
    webApiArray,
    queueArray
  );
  // 12 event loop slide
  queueArray.pop();
  callStackArray.push("rsschool");
  renderSlide(
    codeSlides,
    consoleArray,
    callStackArray,
    webApiArray,
    queueArray
  );
  // 13 event loop slide
  callStackArray.push("console.log('rsschool')");
  renderSlide(
    codeSlides,
    consoleArray,
    callStackArray,
    webApiArray,
    queueArray
  );
  // 14 event loop slide
  consoleArray.push("rsschool");
  renderSlide(
    codeSlides,
    consoleArray,
    callStackArray,
    webApiArray,
    queueArray
  );
  // 15 event loop slide
  callStackArray.pop();
  renderSlide(
    codeSlides,
    consoleArray,
    callStackArray,
    webApiArray,
    queueArray
  );
  // 16 event loop slide
  callStackArray.pop();
  renderSlide(
    codeSlides,
    consoleArray,
    callStackArray,
    webApiArray,
    queueArray
  );
}

function generateAnotherLoopSlides() {
  const codeSlides = "event-loop-code2";
  let consoleArray = [];
  let callStackArray = [];
  let webApiArray = [];
  let queueArray = [];
  // 1 event loop slide
  renderSlide(
    codeSlides,
    consoleArray,
    callStackArray,
    webApiArray,
    queueArray
  );
  callStackArray.push("main()");
  renderSlide(
    codeSlides,
    consoleArray,
    callStackArray,
    webApiArray,
    queueArray
  );
  // 2 event loop slide
  callStackArray.push("console.log('Hi')");
  renderSlide(
    codeSlides,
    consoleArray,
    callStackArray,
    webApiArray,
    queueArray
  );
  // 3 event loop slide
  consoleArray.push("Hi");
  renderSlide(
    codeSlides,
    consoleArray,
    callStackArray,
    webApiArray,
    queueArray
  );
  // 4 event loop slide
  callStackArray.pop();
  renderSlide(
    codeSlides,
    consoleArray,
    callStackArray,
    webApiArray,
    queueArray
  );
  // 5 event loop slide
  callStackArray.push("setTimeout rsschool");
  renderSlide(
    codeSlides,
    consoleArray,
    callStackArray,
    webApiArray,
    queueArray
  );
  // 6 event loop slide
  webApiArray.push("timer <span>rsschool</span>");
  renderSlide(
    codeSlides,
    consoleArray,
    callStackArray,
    webApiArray,
    queueArray
  );
  // 7 event loop slide
  webApiArray.pop();
  queueArray.push("rsschool");
  renderSlide(
    codeSlides,
    consoleArray,
    callStackArray,
    webApiArray,
    queueArray
  );
  // 8 event loop slide
  callStackArray.pop();
  renderSlide(
    codeSlides,
    consoleArray,
    callStackArray,
    webApiArray,
    queueArray
  );
  // 9 event loop slide
  callStackArray.push("console.log('There')");
  renderSlide(
    codeSlides,
    consoleArray,
    callStackArray,
    webApiArray,
    queueArray
  );
  // 10 event loop slide
  consoleArray.push("There");
  renderSlide(
    codeSlides,
    consoleArray,
    callStackArray,
    webApiArray,
    queueArray
  );
  // 11 event loop slide
  callStackArray.pop();
  renderSlide(
    codeSlides,
    consoleArray,
    callStackArray,
    webApiArray,
    queueArray
  );
  // 12 event loop slide
  callStackArray.pop();
  renderSlide(
    codeSlides,
    consoleArray,
    callStackArray,
    webApiArray,
    queueArray
  );
  // 13 event loop slide
  queueArray.pop();
  callStackArray.push("rsschool");
  renderSlide(
    codeSlides,
    consoleArray,
    callStackArray,
    webApiArray,
    queueArray
  );
  // 14 event loop slide
  callStackArray.push("console.log('rsschool')");
  renderSlide(
    codeSlides,
    consoleArray,
    callStackArray,
    webApiArray,
    queueArray
  );
  // 15 event loop slide
  consoleArray.push("rsschool");
  renderSlide(
    codeSlides,
    consoleArray,
    callStackArray,
    webApiArray,
    queueArray
  );
  // 16 event loop slide
  callStackArray.pop();
  renderSlide(
    codeSlides,
    consoleArray,
    callStackArray,
    webApiArray,
    queueArray
  );
  callStackArray.pop();
  renderSlide(
    codeSlides,
    consoleArray,
    callStackArray,
    webApiArray,
    queueArray
  );
  callStackArray.pop();
  renderSlide(
    codeSlides,
    consoleArray,
    callStackArray,
    webApiArray,
    queueArray
  );
}
