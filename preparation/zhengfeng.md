



### **Interview Questions for Dogtronq (Frontend Developer Intern)**

**Introduction:**
"Hello, thanks for coming in. I've reviewed your resume, and you have some impressive and diverse experience. I'd like to dive into some of your frontend projects to understand your technical decisions and problem-solving process."

---

#### **1. The E-commerce Platform & Performance (Upcycler Studios)**

This section is the richest for frontend topics.

*   **Question 1 (Architecture & State Management):**
    "You built a full-stack e-commerce platform with React and Supabase. Can you walk me through the frontend architecture? Specifically, how did you manage global state (like user authentication, shopping cart) and how did you structure your API calls and data fetching?"

    *   **What I'm looking for:** Understanding of state management beyond `useState` (Context API, Zustand, Redux?). Knowledge of data fetching patterns (custom hooks, React Query, SWR?). Awareness of separating concerns.

*   **Question 2 (Performance Deep Dive):**
    "You mentioned reducing page load times by 60%. That's a significant achievement. **What were the specific performance bottlenecks you identified?** What tools did you use to measure this (e.g., Lighthouse, WebPageTest), and what were the top 2-3 technical changes you implemented to achieve this result?"

    *   **What I'm looking for:** Specifics. Did they lazy load components/images? Implement code splitting? Optimize bundles? Cache strategies? This separates those who made a real impact from those who just ran a Lighthouse audit.

*   **Question 3 (A/B Testing & Data-Driven Decisions):**
    "You improved user retention by 85% via A/B tested checkout flows. Describe one specific A/B test you ran. What was the hypothesis? How did you technically implement the A/B test on the frontend? How did you ensure the data you collected was reliable?"

    *   **What I'm looking for:** Understanding of the scientific method in product development. Technical implementation (feature flags, a third-party service?). Basic understanding of statistical significance and tracking.

*   **Question 4 (Mobile UX Challenge):**
    "Tell me about the most challenging mobile-specific UX problem you faced in the checkout flow and how you solved it."

    *   **What I'm looking for:** Problem-solving skills and empathy for the mobile user. Examples could be handling form inputs, touch targets, viewport issues, or performance on slower devices.

---

#### **2. The Mobile App & Cross-Platform (Qrospay)**

*   **Question 5 (Tech Stack & Rationale):**
    "As the first technical hire, the choice of technology was critical. What framework or technology did you use to build the Android/iOS application (e.g., React Native, Flutter, Native)? **What was your decision-making process for choosing that specific stack?** What were the trade-offs?"

    *   **What I'm looking for:** Strategic thinking. Understanding of business constraints (speed, cost, developer availability) vs. technical constraints (performance, access to native APIs).

*   **Question 6 (Foundational Engineering):**
    "Launching an app from zero to 800 users involves a lot of foundational work. What was one key technical decision you made early on regarding code structure, component library, or state management that you were glad you did later? Conversely, is there anything you wish you had done differently?"

    *   **What I'm looking for:** Foresight, ability to learn from mistakes, and understanding of scalable frontend practices.

---

#### **3. The AI & Prompt Engineering (Lenor AI)**

This seems less relevant, but I can test for fundamental understanding.

*   **Question 7 (Bridging FE and AI):**
    "Your work at Lenor AI involved optimizing prompts. In a frontend context, how would you design a user interface that allows a user to build or refine a complex prompt for an AI model? Think about the components, state, and user experience for a non-technical user."

    *   **What I'm looking for:** Ability to translate a backend/AI concept into a usable frontend interface. Focus on UX, component design, and managing complex user input.

---

#### **4. General Frontend & Process**

*   **Question 8 (Testing & Quality):**
    "You mentioned managing automated testing with Jest. Could you describe the testing strategy for your React components? What did you prioritize for unit tests vs. integration tests? Can you give an example of a component that was challenging to test and how you approached it?"

    *   **What I'm looking for:** Practical knowledge of testing. Not just that they *did* it, but *how* and *why*. Understanding of testing pyramid.

*   **Question 9 (Tooling & CI/CD):**
    "Walk me through the CI/CD deployment process you set up. What specific steps were in the pipeline (e.g., linting, testing, building) and what was the frontend's role in that process?"

    *   **What I'm looking for:** Understanding of modern development workflows and how frontend code integrates into a robust deployment pipeline.

---

#### **5. The "Challenger" Question (Abstract Problem-Solving)**

*   **Question 10 (System Design):**
    "Imagine you're building a real-time collaborative document editor like Google Docs. The core feature is that multiple cursors and edits from different users are visible to everyone in near real-time. Outline the high-level frontend architecture for this. What technologies, browser APIs, and data structures would you use, and what are the biggest challenges you foresee?"

    *   **What I'm looking for:** Ability to think about complex, state-syncing problems. Mentions of WebSockets, Operational Transforms (OT) or Conflict-free Replicated Data Types (CRDTs), throttling/debouncing, and the challenges of latency and conflict resolution.

---

### **How I Would Evaluate:**

*   **Depth over Breadth:** I care less that they've used every technology and more that they can explain *why* they used a specific one and the trade-offs involved.
*   **Ownership & Impact:** Did they just follow tickets, or did they identify problems, propose solutions, and measure outcomes (e.g., the 60% performance improvement)?
*   **Learning Mindset:** Their answers about "what they would do differently" are often more revealing than their successes.
*   **Communication:** Can they explain complex technical concepts clearly and concisely?

This line of questioning will quickly separate a competent coder from a thoughtful frontend engineer with high potential.
