const TOTAL_DAYS = 200;

const phaseRanges = {
  1: [1, 60],
  2: [61, 120],
  3: [121, 170],
  4: [171, 200],
};

const getPhase = (day) => {
  if (day <= 60) return "Phase 1 – Core Systems";
  if (day <= 120) return "Phase 2 – Theory Stack";
  if (day <= 170) return "Phase 3 – PYQ Domination";
  return "Phase 4 – Mock & Compression";
};

/* ---------------- PHASE 1 ---------------- */

const phase1Subjects = [
  {
    subject: "Digital Logic",
    days: 12,
    topics: [
      "Number Systems & Complements",
      "Signed Representation & Overflow",
      "Boolean Algebra & Identities",
      "K-Maps (2-4 variables)",
      "Combinational Circuits",
      "Sequential Circuits",
      "Flip-Flops & Timing",
      "Counters & Registers",
      "Minimization Techniques",
      "Hazards & Static Errors",
      "Previous Year Question Deep Dive",
      "Revision + Mixed PYQs"
    ]
  },
  {
    subject: "Computer Organization",
    days: 15,
    topics: [
      "Instruction Cycle & Basic Structure",
      "Number Representation & Arithmetic",
      "ALU & Fast Adders",
      "Pipelining Basics",
      "Pipeline Hazards",
      "Instruction Formats",
      "Addressing Modes",
      "Cache Memory",
      "Cache Mapping & Replacement",
      "Virtual Memory",
      "TLB & Page Replacement",
      "Memory Hierarchy Analysis",
      "COA PYQs Set 1",
      "COA PYQs Set 2",
      "Revision + Weak Areas"
    ]
  },
  {
    subject: "Operating Systems",
    days: 15,
    topics: [
      "Process vs Thread",
      "CPU Scheduling Algorithms",
      "Scheduling Analysis",
      "Synchronization Basics",
      "Semaphores & Monitors",
      "Deadlocks",
      "Deadlock Prevention & Avoidance",
      "Memory Management",
      "Paging & Segmentation",
      "Page Replacement Algorithms",
      "Disk Scheduling",
      "File Systems",
      "OS PYQs Set 1",
      "OS PYQs Set 2",
      "Revision + Case Study Analysis"
    ]
  },
  {
    subject: "DBMS",
    days: 9,
    topics: [
      "ER Model",
      "Relational Model",
      "Relational Algebra",
      "Normalization",
      "Transactions & ACID",
      "Concurrency Control",
      "Indexing",
      "DBMS PYQs",
      "Revision + SQL Practice"
    ]
  },
  {
    subject: "Computer Networks",
    days: 9,
    topics: [
      "OSI vs TCP/IP",
      "Data Link Layer",
      "Flow Control",
      "Congestion Control",
      "Routing Algorithms",
      "Transport Layer",
      "Application Layer",
      "CN PYQs",
      "Revision + Case Study"
    ]
  }
];

/* ---------------- PHASE 2 ---------------- */

const phase2Subjects = [
  {
    subject: "Discrete Mathematics",
    days: 15,
    topics: [
      "Propositional Logic",
      "Predicate Logic",
      "Sets & Relations",
      "Functions",
      "Combinatorics",
      "Recurrence Relations",
      "Graph Theory Basics",
      "Trees & Properties",
      "Graph Algorithms (Conceptual)",
      "Boolean Algebra Revisited",
      "DM PYQs 1",
      "DM PYQs 2",
      "DM PYQs 3",
      "Revision",
      "Mixed Practice"
    ]
  },
  {
    subject: "Theory of Computation",
    days: 15,
    topics: [
      "Regular Languages",
      "DFA/NFA",
      "Regular Expressions",
      "Pumping Lemma",
      "CFG",
      "PDA",
      "CNF & GNF",
      "Turing Machines",
      "Decidability",
      "Reductions",
      "TOC PYQs 1",
      "TOC PYQs 2",
      "TOC PYQs 3",
      "Revision",
      "Edge Case Analysis"
    ]
  },
  {
    subject: "Compiler Design",
    days: 10,
    topics: [
      "Lexical Analysis",
      "Regular Expressions",
      "Parsing Basics",
      "First & Follow",
      "LL Parsing",
      "LR Parsing",
      "Syntax Directed Translation",
      "Code Optimization",
      "Compiler PYQs",
      "Revision"
    ]
  },
  {
    subject: "Algorithms",
    days: 20,
    topics: [
      "Asymptotic Analysis",
      "Recurrence Relations",
      "Divide & Conquer",
      "Greedy",
      "Dynamic Programming",
      "Graph Algorithms",
      "Shortest Path",
      "Minimum Spanning Tree",
      "NP-Completeness",
      "Approximation",
      "Algo PYQs 1",
      "Algo PYQs 2",
      "Algo PYQs 3",
      "Hard Set 1",
      "Hard Set 2",
      "Revision 1",
      "Revision 2",
      "Mixed PYQs",
      "Edge Cases",
      "Final Consolidation"
    ]
  }
];

/* ---------------- PHASE 3 ---------------- */

const phase3Days = 50;

/* ---------------- PHASE 4 ---------------- */

const phase4Days = 30;

export const generatePlan = () => {
  let plan = [];
  let dayCounter = 1;

  const addSubjects = (subjects) => {
    subjects.forEach((sub) => {
      sub.topics.forEach((topic) => {
        plan.push({
          day: dayCounter++,
          phase: getPhase(dayCounter - 1),
          subject: sub.subject,
          topic,
          concept: false,
          pyqs: false,
          errorLog: false,
          notes: "",
          isMock: false
        });
      });
    });
  };

  addSubjects(phase1Subjects);
  addSubjects(phase2Subjects);

  for (let i = 0; i < phase3Days; i++) {
    plan.push({
      day: dayCounter++,
      phase: "Phase 3 – PYQ Domination",
      subject: "Mixed Subjects",
      topic: "Full Subject-Wise PYQ Practice + Error Notebook Expansion",
      concept: false,
      pyqs: false,
      errorLog: false,
      notes: "",
      isMock: false
    });
  }

  for (let i = 0; i < phase4Days; i++) {
    plan.push({
      day: dayCounter++,
      phase: "Phase 4 – Mock & Compression",
      subject: "Full Length Mock",
      topic: i % 2 === 0 ? "Mock Test (3 Hours)" : "Mock Analysis + Weak Area Revision",
      concept: false,
      pyqs: false,
      errorLog: false,
      notes: "",
      isMock: i % 2 === 0
    });
  }

  return plan;
};