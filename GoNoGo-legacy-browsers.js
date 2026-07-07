/*************** 
 * Gonogo *
 ***************/


// store info about the experiment session:
let expName = 'GoNoGo';  // from the Builder filename that created this script
let expInfo = {
    'participant': '',
    'session': '001',
    'nBlocks': '1',
};
let PILOTING = util.getUrlParameters().has('__pilotToken');

// Start code blocks for 'Before Experiment'
// Run 'Before Experiment' code from code_wel
n_blocks = 1;

// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0,0,0]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(InstructRoutineBegin());
flowScheduler.add(InstructRoutineEachFrame());
flowScheduler.add(InstructRoutineEnd());
const pracLoopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(pracLoopLoopBegin(pracLoopLoopScheduler));
flowScheduler.add(pracLoopLoopScheduler);
flowScheduler.add(pracLoopLoopEnd);









flowScheduler.add(readyRoutineBegin());
flowScheduler.add(readyRoutineEachFrame());
flowScheduler.add(readyRoutineEnd());
const BlocksLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(BlocksLoopBegin(BlocksLoopScheduler));
flowScheduler.add(BlocksLoopScheduler);
flowScheduler.add(BlocksLoopEnd);








flowScheduler.add(EndRoutineBegin());
flowScheduler.add(EndRoutineEachFrame());
flowScheduler.add(EndRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'trial_conditions_prac.csv', 'path': 'trial_conditions_prac.csv'},
    {'name': 'trial_conditions.csv', 'path': 'trial_conditions.csv'},
    {'name': 'trial_conditions.csv', 'path': 'trial_conditions.csv'},
    {'name': 'trial_conditions_prac.csv', 'path': 'trial_conditions_prac.csv'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2025.1.1';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var InstructClock;
var Text_wel;
var key_goon_1;
var n_blocks;
var FixationClock;
var fix_cross;
var fix_duration;
var StimulateClock;
var stim;
var key_resp;
var BlankClock;
var blank;
var FeedbackClock;
var fb;
var AskpracClock;
var text_askprac;
var key_resp_askprac;
var EndpracClock;
var readyClock;
var fix;
var BlockCountClock;
var n_this_block;
var BlockEndClock;
var text_BlockEnd;
var key_resp_BlockEnd;
var EndClock;
var endText;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "Instruct"
  InstructClock = new util.Clock();
  Text_wel = new visual.TextStim({
    win: psychoJS.window,
    name: 'Text_wel',
    text: '欢迎您参加本次测试，内容如下：\n①当出现橙色方块时，\n请快速且准确地按“B”键；\n②当出现蓝色方块时，\n请不要按任何按键；\n\n[按空格键开始练习...]',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_goon_1 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Run 'Begin Experiment' code from code_wel
  n_blocks = Number.parseInt(expInfo["nBlocks"]);
  
  // Initialize components for Routine "Fixation"
  FixationClock = new util.Clock();
  fix_cross = new visual.ShapeStim ({
    win: psychoJS.window, name: 'fix_cross', 
    vertices: 'cross', size:[0.05, 0.05],
    ori: 0.0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: 0, 
    interpolate: true, 
  });
  
  // Run 'Begin Experiment' code from code_3
  fix_duration = 0.4;
  
  // Initialize components for Routine "Stimulate"
  StimulateClock = new util.Clock();
  stim = new visual.Rect ({
    win: psychoJS.window, name: 'stim', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0.0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: 0, 
    interpolate: true, 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Blank"
  BlankClock = new util.Clock();
  blank = new visual.TextStim({
    win: psychoJS.window,
    name: 'blank',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "Feedback"
  FeedbackClock = new util.Clock();
  fb = new visual.TextStim({
    win: psychoJS.window,
    name: 'fb',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "Askprac"
  AskpracClock = new util.Clock();
  text_askprac = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_askprac',
    text: '请选择是否继续练习？\n\n按【m】——不了解测试内容，继续练习\n\n按【z】——了解测试内容，结束练习\n\n按z将进入正式测试，没有“正确”/“错误”反馈。',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_askprac = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Endprac"
  EndpracClock = new util.Clock();
  // Initialize components for Routine "ready"
  readyClock = new util.Clock();
  fix = new visual.TextStim({
    win: psychoJS.window,
    name: 'fix',
    text: '正式测试即将开始...',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "BlockCount"
  BlockCountClock = new util.Clock();
  // Run 'Begin Experiment' code from code
  n_this_block = 0;
  
  // Initialize components for Routine "BlockEnd"
  BlockEndClock = new util.Clock();
  text_BlockEnd = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_BlockEnd',
    text: '任意文本\n\n包括换行符',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_BlockEnd = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "End"
  EndClock = new util.Clock();
  endText = new visual.TextStim({
    win: psychoJS.window,
    name: 'endText',
    text: '感谢您的参与，测试结束！\n(5s后自动退出）',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var routineForceEnded;
var InstructMaxDurationReached;
var _key_goon_1_allKeys;
var InstructMaxDuration;
var InstructComponents;
function InstructRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Instruct' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    InstructClock.reset();
    routineTimer.reset();
    InstructMaxDurationReached = false;
    // update component parameters for each repeat
    key_goon_1.keys = undefined;
    key_goon_1.rt = undefined;
    _key_goon_1_allKeys = [];
    psychoJS.experiment.addData('Instruct.started', globalClock.getTime());
    InstructMaxDuration = null
    // keep track of which components have finished
    InstructComponents = [];
    InstructComponents.push(Text_wel);
    InstructComponents.push(key_goon_1);
    
    InstructComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function InstructRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Instruct' ---
    // get current time
    t = InstructClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Text_wel* updates
    if (t >= 0.0 && Text_wel.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Text_wel.tStart = t;  // (not accounting for frame time here)
      Text_wel.frameNStart = frameN;  // exact frame index
      
      Text_wel.setAutoDraw(true);
    }
    
    
    // if Text_wel is active this frame...
    if (Text_wel.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_goon_1* updates
    if (t >= 0.0 && key_goon_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_goon_1.tStart = t;  // (not accounting for frame time here)
      key_goon_1.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_goon_1.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_goon_1.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_goon_1.clearEvents(); });
    }
    
    // if key_goon_1 is active this frame...
    if (key_goon_1.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_goon_1.getKeys({keyList: 'space', waitRelease: false});
      _key_goon_1_allKeys = _key_goon_1_allKeys.concat(theseKeys);
      if (_key_goon_1_allKeys.length > 0) {
        key_goon_1.keys = _key_goon_1_allKeys[_key_goon_1_allKeys.length - 1].name;  // just the last key pressed
        key_goon_1.rt = _key_goon_1_allKeys[_key_goon_1_allKeys.length - 1].rt;
        key_goon_1.duration = _key_goon_1_allKeys[_key_goon_1_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    InstructComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function InstructRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Instruct' ---
    InstructComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('Instruct.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_goon_1.corr, level);
    }
    psychoJS.experiment.addData('key_goon_1.keys', key_goon_1.keys);
    if (typeof key_goon_1.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_goon_1.rt', key_goon_1.rt);
        psychoJS.experiment.addData('key_goon_1.duration', key_goon_1.duration);
        routineTimer.reset();
        }
    
    key_goon_1.stop();
    // the Routine "Instruct" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var pracLoop;
function pracLoopLoopBegin(pracLoopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    pracLoop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 10, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'pracLoop'
    });
    psychoJS.experiment.addLoop(pracLoop); // add the loop to the experiment
    currentLoop = pracLoop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    pracLoop.forEach(function() {
      snapshot = pracLoop.getSnapshot();
    
      pracLoopLoopScheduler.add(importConditions(snapshot));
      const prac_trialsLoopScheduler = new Scheduler(psychoJS);
      pracLoopLoopScheduler.add(prac_trialsLoopBegin(prac_trialsLoopScheduler, snapshot));
      pracLoopLoopScheduler.add(prac_trialsLoopScheduler);
      pracLoopLoopScheduler.add(prac_trialsLoopEnd);
      pracLoopLoopScheduler.add(AskpracRoutineBegin(snapshot));
      pracLoopLoopScheduler.add(AskpracRoutineEachFrame());
      pracLoopLoopScheduler.add(AskpracRoutineEnd(snapshot));
      pracLoopLoopScheduler.add(EndpracRoutineBegin(snapshot));
      pracLoopLoopScheduler.add(EndpracRoutineEachFrame());
      pracLoopLoopScheduler.add(EndpracRoutineEnd(snapshot));
      pracLoopLoopScheduler.add(pracLoopLoopEndIteration(pracLoopLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


var prac_trials;
function prac_trialsLoopBegin(prac_trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    prac_trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'trial_conditions_prac.csv',
      seed: undefined, name: 'prac_trials'
    });
    psychoJS.experiment.addLoop(prac_trials); // add the loop to the experiment
    currentLoop = prac_trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    prac_trials.forEach(function() {
      snapshot = prac_trials.getSnapshot();
    
      prac_trialsLoopScheduler.add(importConditions(snapshot));
      prac_trialsLoopScheduler.add(FixationRoutineBegin(snapshot));
      prac_trialsLoopScheduler.add(FixationRoutineEachFrame());
      prac_trialsLoopScheduler.add(FixationRoutineEnd(snapshot));
      prac_trialsLoopScheduler.add(StimulateRoutineBegin(snapshot));
      prac_trialsLoopScheduler.add(StimulateRoutineEachFrame());
      prac_trialsLoopScheduler.add(StimulateRoutineEnd(snapshot));
      prac_trialsLoopScheduler.add(BlankRoutineBegin(snapshot));
      prac_trialsLoopScheduler.add(BlankRoutineEachFrame());
      prac_trialsLoopScheduler.add(BlankRoutineEnd(snapshot));
      prac_trialsLoopScheduler.add(FeedbackRoutineBegin(snapshot));
      prac_trialsLoopScheduler.add(FeedbackRoutineEachFrame());
      prac_trialsLoopScheduler.add(FeedbackRoutineEnd(snapshot));
      prac_trialsLoopScheduler.add(prac_trialsLoopEndIteration(prac_trialsLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function prac_trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(prac_trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function prac_trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function pracLoopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(pracLoop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function pracLoopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var Blocks;
function BlocksLoopBegin(BlocksLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    Blocks = new TrialHandler({
      psychoJS: psychoJS,
      nReps: n_blocks, method: TrialHandler.Method.FULLRANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'Blocks'
    });
    psychoJS.experiment.addLoop(Blocks); // add the loop to the experiment
    currentLoop = Blocks;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    Blocks.forEach(function() {
      snapshot = Blocks.getSnapshot();
    
      BlocksLoopScheduler.add(importConditions(snapshot));
      BlocksLoopScheduler.add(BlockCountRoutineBegin(snapshot));
      BlocksLoopScheduler.add(BlockCountRoutineEachFrame());
      BlocksLoopScheduler.add(BlockCountRoutineEnd(snapshot));
      const trialsLoopScheduler = new Scheduler(psychoJS);
      BlocksLoopScheduler.add(trialsLoopBegin(trialsLoopScheduler, snapshot));
      BlocksLoopScheduler.add(trialsLoopScheduler);
      BlocksLoopScheduler.add(trialsLoopEnd);
      BlocksLoopScheduler.add(BlockEndRoutineBegin(snapshot));
      BlocksLoopScheduler.add(BlockEndRoutineEachFrame());
      BlocksLoopScheduler.add(BlockEndRoutineEnd(snapshot));
      BlocksLoopScheduler.add(BlocksLoopEndIteration(BlocksLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.FULLRANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'trial_conditions.csv',
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials.forEach(function() {
      snapshot = trials.getSnapshot();
    
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(FixationRoutineBegin(snapshot));
      trialsLoopScheduler.add(FixationRoutineEachFrame());
      trialsLoopScheduler.add(FixationRoutineEnd(snapshot));
      trialsLoopScheduler.add(StimulateRoutineBegin(snapshot));
      trialsLoopScheduler.add(StimulateRoutineEachFrame());
      trialsLoopScheduler.add(StimulateRoutineEnd(snapshot));
      trialsLoopScheduler.add(BlankRoutineBegin(snapshot));
      trialsLoopScheduler.add(BlankRoutineEachFrame());
      trialsLoopScheduler.add(BlankRoutineEnd(snapshot));
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function BlocksLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(Blocks);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function BlocksLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var FixationMaxDurationReached;
var FixationMaxDuration;
var FixationComponents;
function FixationRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Fixation' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    FixationClock.reset();
    routineTimer.reset();
    FixationMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_3
    fix_duration = (0.4 + Math.random()*0.6);
    
    psychoJS.experiment.addData('Fixation.started', globalClock.getTime());
    FixationMaxDuration = null
    // keep track of which components have finished
    FixationComponents = [];
    FixationComponents.push(fix_cross);
    
    FixationComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function FixationRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Fixation' ---
    // get current time
    t = FixationClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fix_cross* updates
    if (t >= 0.0 && fix_cross.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fix_cross.tStart = t;  // (not accounting for frame time here)
      fix_cross.frameNStart = frameN;  // exact frame index
      
      fix_cross.setAutoDraw(true);
    }
    
    
    // if fix_cross is active this frame...
    if (fix_cross.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + fix_duration - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (fix_cross.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      fix_cross.tStop = t;  // not accounting for scr refresh
      fix_cross.frameNStop = frameN;  // exact frame index
      // update status
      fix_cross.status = PsychoJS.Status.FINISHED;
      fix_cross.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    FixationComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function FixationRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Fixation' ---
    FixationComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('Fixation.stopped', globalClock.getTime());
    // the Routine "Fixation" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var StimulateMaxDurationReached;
var _key_resp_allKeys;
var StimulateMaxDuration;
var StimulateComponents;
function StimulateRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Stimulate' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    StimulateClock.reset(routineTimer.getTime());
    routineTimer.add(1.200000);
    StimulateMaxDurationReached = false;
    // update component parameters for each repeat
    stim.setFillColor(new util.Color(shapeColor));
    stim.setSize([0.1, 0.1]);
    // stim.setNVertices(4);
    stim.setLineColor(new util.Color(shapeColor));
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    psychoJS.experiment.addData('Stimulate.started', globalClock.getTime());
    StimulateMaxDuration = null
    // keep track of which components have finished
    StimulateComponents = [];
    StimulateComponents.push(stim);
    StimulateComponents.push(key_resp);
    
    StimulateComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function StimulateRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Stimulate' ---
    // get current time
    t = StimulateClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *stim* updates
    if (t >= 0.0 && stim.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stim.tStart = t;  // (not accounting for frame time here)
      stim.frameNStart = frameN;  // exact frame index
      
      stim.setAutoDraw(true);
    }
    
    
    // if stim is active this frame...
    if (stim.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 0.4 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (stim.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      stim.tStop = t;  // not accounting for scr refresh
      stim.frameNStop = frameN;  // exact frame index
      // update status
      stim.status = PsychoJS.Status.FINISHED;
      stim.setAutoDraw(false);
    }
    
    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }
    frameRemains = 0.0 + 1.2 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (key_resp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      key_resp.tStop = t;  // not accounting for scr refresh
      key_resp.frameNStop = frameN;  // exact frame index
      // update status
      key_resp.status = PsychoJS.Status.FINISHED;
      frameRemains = 0.0 + 1.2 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (key_resp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        // keep track of stop time/frame for later
        key_resp.tStop = t;  // not accounting for scr refresh
        key_resp.frameNStop = frameN;  // exact frame index
        // update status
        key_resp.status = PsychoJS.Status.FINISHED;
        key_resp.status = PsychoJS.Status.FINISHED;
          }
        
      }
      
      // if key_resp is active this frame...
      if (key_resp.status === PsychoJS.Status.STARTED) {
        let theseKeys = key_resp.getKeys({keyList: "b", waitRelease: false});
        _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
        if (_key_resp_allKeys.length > 0) {
          key_resp.keys = _key_resp_allKeys[0].name;  // just the first key pressed
          key_resp.rt = _key_resp_allKeys[0].rt;
          key_resp.duration = _key_resp_allKeys[0].duration;
          // was this correct?
          if (key_resp.keys == corr_ans) {
              key_resp.corr = 1;
          } else {
              key_resp.corr = 0;
          }
          // a response ends the routine
          continueRoutine = false;
        }
      }
      
      // check for quit (typically the Esc key)
      if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
        return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
      }
      
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      StimulateComponents.forEach( function(thisComponent) {
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
        }
      });
      
      // refresh the screen if continuing
      if (continueRoutine && routineTimer.getTime() > 0) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
function StimulateRoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'Stimulate' ---
      StimulateComponents.forEach( function(thisComponent) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      });
      psychoJS.experiment.addData('Stimulate.stopped', globalClock.getTime());
      // was no response the correct answer?!
      if (key_resp.keys === undefined) {
        if (['None','none',undefined].includes(corr_ans)) {
           key_resp.corr = 1;  // correct non-response
        } else {
           key_resp.corr = 0;  // failed to respond (incorrectly)
        }
      }
      // store data for current loop
      // update the trial handler
      if (currentLoop instanceof MultiStairHandler) {
        currentLoop.addResponse(key_resp.corr, level);
      }
      psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
      psychoJS.experiment.addData('key_resp.corr', key_resp.corr);
      if (typeof key_resp.keys !== 'undefined') {  // we had a response
          psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
          psychoJS.experiment.addData('key_resp.duration', key_resp.duration);
          routineTimer.reset();
          }
      
      key_resp.stop();
      if (routineForceEnded) {
          routineTimer.reset();} else if (StimulateMaxDurationReached) {
          StimulateClock.add(StimulateMaxDuration);
      } else {
          StimulateClock.add(1.200000);
      }
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
var BlankMaxDurationReached;
var BlankMaxDuration;
var BlankComponents;
function BlankRoutineBegin(snapshot) {
    return async function () {
      TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
      
      //--- Prepare to start Routine 'Blank' ---
      t = 0;
      frameN = -1;
      continueRoutine = true; // until we're told otherwise
      // keep track of whether this Routine was forcibly ended
      routineForceEnded = false;
      BlankClock.reset(routineTimer.getTime());
      routineTimer.add(0.500000);
      BlankMaxDurationReached = false;
      // update component parameters for each repeat
      psychoJS.experiment.addData('Blank.started', globalClock.getTime());
      BlankMaxDuration = null
      // keep track of which components have finished
      BlankComponents = [];
      BlankComponents.push(blank);
      
      BlankComponents.forEach( function(thisComponent) {
        if ('status' in thisComponent)
          thisComponent.status = PsychoJS.Status.NOT_STARTED;
         });
      return Scheduler.Event.NEXT;
    }
  }
  
  
function BlankRoutineEachFrame() {
    return async function () {
      //--- Loop for each frame of Routine 'Blank' ---
      // get current time
      t = BlankClock.getTime();
      frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
      // update/draw components on each frame
      
      // *blank* updates
      if (t >= 0.0 && blank.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        blank.tStart = t;  // (not accounting for frame time here)
        blank.frameNStart = frameN;  // exact frame index
        
        blank.setAutoDraw(true);
      }
      
      
      // if blank is active this frame...
      if (blank.status === PsychoJS.Status.STARTED) {
      }
      
      frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (blank.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        // keep track of stop time/frame for later
        blank.tStop = t;  // not accounting for scr refresh
        blank.frameNStop = frameN;  // exact frame index
        // update status
        blank.status = PsychoJS.Status.FINISHED;
        blank.setAutoDraw(false);
      }
      
      // check for quit (typically the Esc key)
      if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
        return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
      }
      
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      BlankComponents.forEach( function(thisComponent) {
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
        }
      });
      
      // refresh the screen if continuing
      if (continueRoutine && routineTimer.getTime() > 0) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
function BlankRoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'Blank' ---
      BlankComponents.forEach( function(thisComponent) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      });
      psychoJS.experiment.addData('Blank.stopped', globalClock.getTime());
      if (routineForceEnded) {
          routineTimer.reset();} else if (BlankMaxDurationReached) {
          BlankClock.add(BlankMaxDuration);
      } else {
          BlankClock.add(0.500000);
      }
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
var FeedbackMaxDurationReached;
var fb_text;
var fb_col;
var FeedbackMaxDuration;
var FeedbackComponents;
function FeedbackRoutineBegin(snapshot) {
    return async function () {
      TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
      
      //--- Prepare to start Routine 'Feedback' ---
      t = 0;
      frameN = -1;
      continueRoutine = true; // until we're told otherwise
      // keep track of whether this Routine was forcibly ended
      routineForceEnded = false;
      FeedbackClock.reset(routineTimer.getTime());
      routineTimer.add(1.000000);
      FeedbackMaxDurationReached = false;
      // update component parameters for each repeat
      // Run 'Begin Routine' code from fb_code
      fb_text = "None";
      fb_col = "white";
      if ((isGo === "Go")) {
          if (key_resp.corr) {
              fb_text = "\u6b63\u786e";
          } else {
              fb_text = "\u9519\u8bef\uff0c\u5e94\u8be5\u6309B\u952e\uff01";
          }
      } else {
          if (key_resp.corr) {
              fb_text = "\u6b63\u786e";
          } else {
              fb_text = "\u9519\u8bef\uff0c\u4e0d\u8be5\u6309\u952e\uff01";
          }
      }
      
      fb.setColor(new util.Color(fb_col));
      fb.setText(fb_text);
      psychoJS.experiment.addData('Feedback.started', globalClock.getTime());
      FeedbackMaxDuration = null
      // keep track of which components have finished
      FeedbackComponents = [];
      FeedbackComponents.push(fb);
      
      FeedbackComponents.forEach( function(thisComponent) {
        if ('status' in thisComponent)
          thisComponent.status = PsychoJS.Status.NOT_STARTED;
         });
      return Scheduler.Event.NEXT;
    }
  }
  
  
function FeedbackRoutineEachFrame() {
    return async function () {
      //--- Loop for each frame of Routine 'Feedback' ---
      // get current time
      t = FeedbackClock.getTime();
      frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
      // update/draw components on each frame
      
      // *fb* updates
      if (t >= 0.0 && fb.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        fb.tStart = t;  // (not accounting for frame time here)
        fb.frameNStart = frameN;  // exact frame index
        
        fb.setAutoDraw(true);
      }
      
      
      // if fb is active this frame...
      if (fb.status === PsychoJS.Status.STARTED) {
      }
      
      frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (fb.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        // keep track of stop time/frame for later
        fb.tStop = t;  // not accounting for scr refresh
        fb.frameNStop = frameN;  // exact frame index
        // update status
        fb.status = PsychoJS.Status.FINISHED;
        fb.setAutoDraw(false);
      }
      
      // check for quit (typically the Esc key)
      if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
        return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
      }
      
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      FeedbackComponents.forEach( function(thisComponent) {
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
        }
      });
      
      // refresh the screen if continuing
      if (continueRoutine && routineTimer.getTime() > 0) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
function FeedbackRoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'Feedback' ---
      FeedbackComponents.forEach( function(thisComponent) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      });
      psychoJS.experiment.addData('Feedback.stopped', globalClock.getTime());
      if (routineForceEnded) {
          routineTimer.reset();} else if (FeedbackMaxDurationReached) {
          FeedbackClock.add(FeedbackMaxDuration);
      } else {
          FeedbackClock.add(1.000000);
      }
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
var AskpracMaxDurationReached;
var _key_resp_askprac_allKeys;
var AskpracMaxDuration;
var AskpracComponents;
function AskpracRoutineBegin(snapshot) {
    return async function () {
      TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
      
      //--- Prepare to start Routine 'Askprac' ---
      t = 0;
      frameN = -1;
      continueRoutine = true; // until we're told otherwise
      // keep track of whether this Routine was forcibly ended
      routineForceEnded = false;
      AskpracClock.reset();
      routineTimer.reset();
      AskpracMaxDurationReached = false;
      // update component parameters for each repeat
      key_resp_askprac.keys = undefined;
      key_resp_askprac.rt = undefined;
      _key_resp_askprac_allKeys = [];
      psychoJS.experiment.addData('Askprac.started', globalClock.getTime());
      AskpracMaxDuration = null
      // keep track of which components have finished
      AskpracComponents = [];
      AskpracComponents.push(text_askprac);
      AskpracComponents.push(key_resp_askprac);
      
      AskpracComponents.forEach( function(thisComponent) {
        if ('status' in thisComponent)
          thisComponent.status = PsychoJS.Status.NOT_STARTED;
         });
      return Scheduler.Event.NEXT;
    }
  }
  
  
function AskpracRoutineEachFrame() {
    return async function () {
      //--- Loop for each frame of Routine 'Askprac' ---
      // get current time
      t = AskpracClock.getTime();
      frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
      // update/draw components on each frame
      
      // *text_askprac* updates
      if (t >= 0.0 && text_askprac.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        text_askprac.tStart = t;  // (not accounting for frame time here)
        text_askprac.frameNStart = frameN;  // exact frame index
        
        text_askprac.setAutoDraw(true);
      }
      
      
      // if text_askprac is active this frame...
      if (text_askprac.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *key_resp_askprac* updates
      if (t >= 0.0 && key_resp_askprac.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        key_resp_askprac.tStart = t;  // (not accounting for frame time here)
        key_resp_askprac.frameNStart = frameN;  // exact frame index
        
        // keyboard checking is just starting
        psychoJS.window.callOnFlip(function() { key_resp_askprac.clock.reset(); });  // t=0 on next screen flip
        psychoJS.window.callOnFlip(function() { key_resp_askprac.start(); }); // start on screen flip
        psychoJS.window.callOnFlip(function() { key_resp_askprac.clearEvents(); });
      }
      
      // if key_resp_askprac is active this frame...
      if (key_resp_askprac.status === PsychoJS.Status.STARTED) {
        let theseKeys = key_resp_askprac.getKeys({keyList: ['z','m'], waitRelease: false});
        _key_resp_askprac_allKeys = _key_resp_askprac_allKeys.concat(theseKeys);
        if (_key_resp_askprac_allKeys.length > 0) {
          key_resp_askprac.keys = _key_resp_askprac_allKeys[_key_resp_askprac_allKeys.length - 1].name;  // just the last key pressed
          key_resp_askprac.rt = _key_resp_askprac_allKeys[_key_resp_askprac_allKeys.length - 1].rt;
          key_resp_askprac.duration = _key_resp_askprac_allKeys[_key_resp_askprac_allKeys.length - 1].duration;
          // a response ends the routine
          continueRoutine = false;
        }
      }
      
      // check for quit (typically the Esc key)
      if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
        return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
      }
      
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      AskpracComponents.forEach( function(thisComponent) {
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
        }
      });
      
      // refresh the screen if continuing
      if (continueRoutine) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
function AskpracRoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'Askprac' ---
      AskpracComponents.forEach( function(thisComponent) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      });
      psychoJS.experiment.addData('Askprac.stopped', globalClock.getTime());
      // update the trial handler
      if (currentLoop instanceof MultiStairHandler) {
        currentLoop.addResponse(key_resp_askprac.corr, level);
      }
      psychoJS.experiment.addData('key_resp_askprac.keys', key_resp_askprac.keys);
      if (typeof key_resp_askprac.keys !== 'undefined') {  // we had a response
          psychoJS.experiment.addData('key_resp_askprac.rt', key_resp_askprac.rt);
          psychoJS.experiment.addData('key_resp_askprac.duration', key_resp_askprac.duration);
          routineTimer.reset();
          }
      
      key_resp_askprac.stop();
      // the Routine "Askprac" was not non-slip safe, so reset the non-slip timer
      routineTimer.reset();
      
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
var EndpracMaxDurationReached;
var EndpracMaxDuration;
var EndpracComponents;
function EndpracRoutineBegin(snapshot) {
    return async function () {
      TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
      
      //--- Prepare to start Routine 'Endprac' ---
      t = 0;
      frameN = -1;
      continueRoutine = true; // until we're told otherwise
      // keep track of whether this Routine was forcibly ended
      routineForceEnded = false;
      EndpracClock.reset();
      routineTimer.reset();
      EndpracMaxDurationReached = false;
      // update component parameters for each repeat
      // Run 'Begin Routine' code from code_endprac
      if ((key_resp_askprac.keys === "z")) {
          pracLoop.finished = true;
          continueRoutine = false;
      }
      
      psychoJS.experiment.addData('Endprac.started', globalClock.getTime());
      EndpracMaxDuration = null
      // keep track of which components have finished
      EndpracComponents = [];
      
      EndpracComponents.forEach( function(thisComponent) {
        if ('status' in thisComponent)
          thisComponent.status = PsychoJS.Status.NOT_STARTED;
         });
      return Scheduler.Event.NEXT;
    }
  }
  
  
function EndpracRoutineEachFrame() {
    return async function () {
      //--- Loop for each frame of Routine 'Endprac' ---
      // get current time
      t = EndpracClock.getTime();
      frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
      // update/draw components on each frame
      // check for quit (typically the Esc key)
      if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
        return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
      }
      
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      EndpracComponents.forEach( function(thisComponent) {
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
        }
      });
      
      // refresh the screen if continuing
      if (continueRoutine) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
function EndpracRoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'Endprac' ---
      EndpracComponents.forEach( function(thisComponent) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      });
      psychoJS.experiment.addData('Endprac.stopped', globalClock.getTime());
      // the Routine "Endprac" was not non-slip safe, so reset the non-slip timer
      routineTimer.reset();
      
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
var readyMaxDurationReached;
var readyMaxDuration;
var readyComponents;
function readyRoutineBegin(snapshot) {
    return async function () {
      TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
      
      //--- Prepare to start Routine 'ready' ---
      t = 0;
      frameN = -1;
      continueRoutine = true; // until we're told otherwise
      // keep track of whether this Routine was forcibly ended
      routineForceEnded = false;
      readyClock.reset(routineTimer.getTime());
      routineTimer.add(2.000000);
      readyMaxDurationReached = false;
      // update component parameters for each repeat
      psychoJS.experiment.addData('ready.started', globalClock.getTime());
      readyMaxDuration = null
      // keep track of which components have finished
      readyComponents = [];
      readyComponents.push(fix);
      
      readyComponents.forEach( function(thisComponent) {
        if ('status' in thisComponent)
          thisComponent.status = PsychoJS.Status.NOT_STARTED;
         });
      return Scheduler.Event.NEXT;
    }
  }
  
  
function readyRoutineEachFrame() {
    return async function () {
      //--- Loop for each frame of Routine 'ready' ---
      // get current time
      t = readyClock.getTime();
      frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
      // update/draw components on each frame
      
      // *fix* updates
      if (t >= 0.0 && fix.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        fix.tStart = t;  // (not accounting for frame time here)
        fix.frameNStart = frameN;  // exact frame index
        
        fix.setAutoDraw(true);
      }
      
      
      // if fix is active this frame...
      if (fix.status === PsychoJS.Status.STARTED) {
      }
      
      frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (fix.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        // keep track of stop time/frame for later
        fix.tStop = t;  // not accounting for scr refresh
        fix.frameNStop = frameN;  // exact frame index
        // update status
        fix.status = PsychoJS.Status.FINISHED;
        fix.setAutoDraw(false);
      }
      
      // check for quit (typically the Esc key)
      if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
        return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
      }
      
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      readyComponents.forEach( function(thisComponent) {
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
        }
      });
      
      // refresh the screen if continuing
      if (continueRoutine && routineTimer.getTime() > 0) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
function readyRoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'ready' ---
      readyComponents.forEach( function(thisComponent) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      });
      psychoJS.experiment.addData('ready.stopped', globalClock.getTime());
      if (routineForceEnded) {
          routineTimer.reset();} else if (readyMaxDurationReached) {
          readyClock.add(readyMaxDuration);
      } else {
          readyClock.add(2.000000);
      }
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
var BlockCountMaxDurationReached;
var BlockCountMaxDuration;
var BlockCountComponents;
function BlockCountRoutineBegin(snapshot) {
    return async function () {
      TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
      
      //--- Prepare to start Routine 'BlockCount' ---
      t = 0;
      frameN = -1;
      continueRoutine = true; // until we're told otherwise
      // keep track of whether this Routine was forcibly ended
      routineForceEnded = false;
      BlockCountClock.reset();
      routineTimer.reset();
      BlockCountMaxDurationReached = false;
      // update component parameters for each repeat
      psychoJS.experiment.addData('BlockCount.started', globalClock.getTime());
      BlockCountMaxDuration = null
      // keep track of which components have finished
      BlockCountComponents = [];
      
      BlockCountComponents.forEach( function(thisComponent) {
        if ('status' in thisComponent)
          thisComponent.status = PsychoJS.Status.NOT_STARTED;
         });
      return Scheduler.Event.NEXT;
    }
  }
  
  
function BlockCountRoutineEachFrame() {
    return async function () {
      //--- Loop for each frame of Routine 'BlockCount' ---
      // get current time
      t = BlockCountClock.getTime();
      frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
      // update/draw components on each frame
      // check for quit (typically the Esc key)
      if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
        return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
      }
      
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      BlockCountComponents.forEach( function(thisComponent) {
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
        }
      });
      
      // refresh the screen if continuing
      if (continueRoutine) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
function BlockCountRoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'BlockCount' ---
      BlockCountComponents.forEach( function(thisComponent) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      });
      psychoJS.experiment.addData('BlockCount.stopped', globalClock.getTime());
      // Run 'End Routine' code from code
      n_this_block = (n_this_block + 1);
      
      // the Routine "BlockCount" was not non-slip safe, so reset the non-slip timer
      routineTimer.reset();
      
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
var BlockEndMaxDurationReached;
var _key_resp_BlockEnd_allKeys;
var fb_blockend;
var maxDurationReached;
var BlockEndMaxDuration;
var BlockEndComponents;
function BlockEndRoutineBegin(snapshot) {
    return async function () {
      TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
      
      //--- Prepare to start Routine 'BlockEnd' ---
      t = 0;
      frameN = -1;
      continueRoutine = true; // until we're told otherwise
      // keep track of whether this Routine was forcibly ended
      routineForceEnded = false;
      BlockEndClock.reset();
      routineTimer.reset();
      BlockEndMaxDurationReached = false;
      // update component parameters for each repeat
      key_resp_BlockEnd.keys = undefined;
      key_resp_BlockEnd.rt = undefined;
      _key_resp_BlockEnd_allKeys = [];
      // Run 'Begin Routine' code from code_blockend
      fb_blockend = `
      你完成了第${n_this_block}/${n_blocks}组，
      可以稍作休息。
      [按空格键继续...]`
      ;
      text_BlockEnd.text = fb_blockend;
      
      psychoJS.experiment.addData('BlockEnd.started', globalClock.getTime());
      // skip this Routine if its 'Skip if' condition is True
      continueRoutine = continueRoutine && !((n_this_block == n_blocks));
      maxDurationReached = false
      BlockEndMaxDuration = null
      // keep track of which components have finished
      BlockEndComponents = [];
      BlockEndComponents.push(text_BlockEnd);
      BlockEndComponents.push(key_resp_BlockEnd);
      
      BlockEndComponents.forEach( function(thisComponent) {
        if ('status' in thisComponent)
          thisComponent.status = PsychoJS.Status.NOT_STARTED;
         });
      return Scheduler.Event.NEXT;
    }
  }
  
  
function BlockEndRoutineEachFrame() {
    return async function () {
      //--- Loop for each frame of Routine 'BlockEnd' ---
      // get current time
      t = BlockEndClock.getTime();
      frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
      // update/draw components on each frame
      
      // *text_BlockEnd* updates
      if (t >= 0.0 && text_BlockEnd.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        text_BlockEnd.tStart = t;  // (not accounting for frame time here)
        text_BlockEnd.frameNStart = frameN;  // exact frame index
        
        text_BlockEnd.setAutoDraw(true);
      }
      
      
      // if text_BlockEnd is active this frame...
      if (text_BlockEnd.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *key_resp_BlockEnd* updates
      if (t >= 0.0 && key_resp_BlockEnd.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        key_resp_BlockEnd.tStart = t;  // (not accounting for frame time here)
        key_resp_BlockEnd.frameNStart = frameN;  // exact frame index
        
        // keyboard checking is just starting
        psychoJS.window.callOnFlip(function() { key_resp_BlockEnd.clock.reset(); });  // t=0 on next screen flip
        psychoJS.window.callOnFlip(function() { key_resp_BlockEnd.start(); }); // start on screen flip
        psychoJS.window.callOnFlip(function() { key_resp_BlockEnd.clearEvents(); });
      }
      
      // if key_resp_BlockEnd is active this frame...
      if (key_resp_BlockEnd.status === PsychoJS.Status.STARTED) {
        let theseKeys = key_resp_BlockEnd.getKeys({keyList: 'space', waitRelease: false});
        _key_resp_BlockEnd_allKeys = _key_resp_BlockEnd_allKeys.concat(theseKeys);
        if (_key_resp_BlockEnd_allKeys.length > 0) {
          key_resp_BlockEnd.keys = _key_resp_BlockEnd_allKeys[_key_resp_BlockEnd_allKeys.length - 1].name;  // just the last key pressed
          key_resp_BlockEnd.rt = _key_resp_BlockEnd_allKeys[_key_resp_BlockEnd_allKeys.length - 1].rt;
          key_resp_BlockEnd.duration = _key_resp_BlockEnd_allKeys[_key_resp_BlockEnd_allKeys.length - 1].duration;
          // a response ends the routine
          continueRoutine = false;
        }
      }
      
      // check for quit (typically the Esc key)
      if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
        return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
      }
      
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      BlockEndComponents.forEach( function(thisComponent) {
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
        }
      });
      
      // refresh the screen if continuing
      if (continueRoutine) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
function BlockEndRoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'BlockEnd' ---
      BlockEndComponents.forEach( function(thisComponent) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      });
      psychoJS.experiment.addData('BlockEnd.stopped', globalClock.getTime());
      // update the trial handler
      if (currentLoop instanceof MultiStairHandler) {
        currentLoop.addResponse(key_resp_BlockEnd.corr, level);
      }
      psychoJS.experiment.addData('key_resp_BlockEnd.keys', key_resp_BlockEnd.keys);
      if (typeof key_resp_BlockEnd.keys !== 'undefined') {  // we had a response
          psychoJS.experiment.addData('key_resp_BlockEnd.rt', key_resp_BlockEnd.rt);
          psychoJS.experiment.addData('key_resp_BlockEnd.duration', key_resp_BlockEnd.duration);
          routineTimer.reset();
          }
      
      key_resp_BlockEnd.stop();
      // the Routine "BlockEnd" was not non-slip safe, so reset the non-slip timer
      routineTimer.reset();
      
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
var EndMaxDurationReached;
var EndMaxDuration;
var EndComponents;
function EndRoutineBegin(snapshot) {
    return async function () {
      TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
      
      //--- Prepare to start Routine 'End' ---
      t = 0;
      frameN = -1;
      continueRoutine = true; // until we're told otherwise
      // keep track of whether this Routine was forcibly ended
      routineForceEnded = false;
      EndClock.reset(routineTimer.getTime());
      routineTimer.add(5.000000);
      EndMaxDurationReached = false;
      // update component parameters for each repeat
      psychoJS.experiment.addData('End.started', globalClock.getTime());
      EndMaxDuration = null
      // keep track of which components have finished
      EndComponents = [];
      EndComponents.push(endText);
      
      EndComponents.forEach( function(thisComponent) {
        if ('status' in thisComponent)
          thisComponent.status = PsychoJS.Status.NOT_STARTED;
         });
      return Scheduler.Event.NEXT;
    }
  }
  
  
function EndRoutineEachFrame() {
    return async function () {
      //--- Loop for each frame of Routine 'End' ---
      // get current time
      t = EndClock.getTime();
      frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
      // update/draw components on each frame
      
      // *endText* updates
      if (t >= 0.0 && endText.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        endText.tStart = t;  // (not accounting for frame time here)
        endText.frameNStart = frameN;  // exact frame index
        
        endText.setAutoDraw(true);
      }
      
      
      // if endText is active this frame...
      if (endText.status === PsychoJS.Status.STARTED) {
      }
      
      frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (endText.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        // keep track of stop time/frame for later
        endText.tStop = t;  // not accounting for scr refresh
        endText.frameNStop = frameN;  // exact frame index
        // update status
        endText.status = PsychoJS.Status.FINISHED;
        endText.setAutoDraw(false);
      }
      
      // check for quit (typically the Esc key)
      if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
        return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
      }
      
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      EndComponents.forEach( function(thisComponent) {
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
        }
      });
      
      // refresh the screen if continuing
      if (continueRoutine && routineTimer.getTime() > 0) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
function EndRoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'End' ---
      EndComponents.forEach( function(thisComponent) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      });
      psychoJS.experiment.addData('End.stopped', globalClock.getTime());
      if (routineForceEnded) {
          routineTimer.reset();} else if (EndMaxDurationReached) {
          EndClock.add(EndMaxDuration);
      } else {
          EndClock.add(5.000000);
      }
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
function importConditions(currentLoop) {
    return async function () {
      psychoJS.importAttributes(currentLoop.getCurrentTrial());
      return Scheduler.Event.NEXT;
      };
  }
  
  
async function quitPsychoJS(message, isCompleted) {
    // Check for and save orphaned data
    if (psychoJS.experiment.isEntryEmpty()) {
      psychoJS.experiment.nextEntry();
    }
    psychoJS.window.close();
    psychoJS.quit({message: message, isCompleted: isCompleted});
    
    return Scheduler.Event.QUIT;
  }
