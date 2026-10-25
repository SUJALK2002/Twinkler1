import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, BookOpen, CircuitBoard, GraduationCap, Layers3, Lightbulb, MoveRight, Wrench } from 'lucide-react'

const topics = [
  { id: 'kit', label: 'Kit information', icon: Wrench },
  { id: 'student', label: 'Student training', icon: Lightbulb },
  { id: 'teacher', label: 'Teacher training', icon: GraduationCap },
  { id: 'lms', label: 'LMS access', icon: Layers3 },
]

const kits = [
  {
    number: '01',
    name: 'Tinker Starter',
    level: 'FOUNDATION',
    color: 'orange',
    icon: Wrench,
    summary: 'A first step into circuits, components and creative problem-solving.',
    details: {
      kit: 'A classroom-ready introduction to core electronic components, basic circuits and entry-level sensors. Guided build activities help students learn how parts connect and how small changes affect a project.',
      student: 'Students follow a scaffolded sequence: identify components, assemble a simple circuit, test what it does, then make a small improvement. The focus is safe handling, observation and learning through iteration.',
      teacher: 'Teachers receive lesson guidance, component orientation and practical facilitation tips. The training models how to introduce a build, support different learners and guide students when a first attempt does not work.',
      lms: 'Digital resources organize the learning sequence and supporting lesson materials in one place. Teachers can revisit instructions and use the project pathway to keep classroom activities structured.',
    },
  },
  {
    number: '02',
    name: 'Smart Sensors',
    level: 'SENSING & INPUT',
    color: 'blue',
    icon: CircuitBoard,
    summary: 'Explore how robots sense, interpret and respond to their surroundings.',
    details: {
      kit: 'A sensor-focused set for exploring how inputs such as light, distance or environmental changes can be detected. Students connect sensor readings to a response and investigate how different conditions affect results.',
      student: 'Learners observe sensor behavior, compare readings, set simple thresholds and build a project that responds to its environment. Activities encourage prediction, testing and explaining evidence.',
      teacher: 'Teacher sessions cover sensor concepts, setup, troubleshooting and question-led instruction. Lesson notes help connect hands-on testing with the underlying ideas of input, data and response.',
      lms: 'The LMS provides a place for digital project guides and supporting resources. Students can follow the activity sequence while teachers keep reference materials alongside the program.',
    },
  },
  {
    number: '03',
    name: 'Robotics & Motion',
    level: 'MOVEMENT & CONTROL',
    color: 'green',
    icon: MoveRight,
    summary: 'Bring code, motors and mechanisms together to make ideas move.',
    details: {
      kit: 'A practical collection for exploring movement and control with robotic builds. Students investigate how motors and mechanisms work together and how a sequence of instructions can guide motion.',
      student: 'Students assemble and control a moving build, then refine its behavior through step-by-step testing. Challenges introduce sequencing, direction, timing and the value of debugging.',
      teacher: 'Training gives teachers time to assemble and run the activities themselves. It covers classroom setup, common build issues and ways to help students debug without taking over their work.',
      lms: 'Digital lesson materials support each stage from first assembly to extension challenge. The LMS helps teachers access the project pathway and revisit learning resources during the program.',
    },
  },
  {
    number: '04',
    name: 'Connected Creators',
    level: 'SMART PROJECTS',
    color: 'purple',
    icon: BookOpen,
    summary: 'Combine making and connected technology in open-ended projects.',
    details: {
      kit: 'A project pathway for learners ready to combine electronics, coding and connected-device concepts. Activities build on foundational skills and encourage students to plan a purposeful solution.',
      student: 'Learners plan a project, connect its components, test how it behaves and communicate how it works. Open-ended prompts encourage design choices, collaboration and thoughtful iteration.',
      teacher: 'Teacher enablement focuses on guiding project planning, supporting collaborative builds and helping students explain their design decisions. Extension ideas help adapt activities to class readiness.',
      lms: 'The LMS brings project references and program materials together so teachers can guide the learning journey. Digital resources support preparation, in-class facilitation and continued exploration.',
    },
  },
]

export default function KitsPage() {
  const [flippedKit, setFlippedKit] = useState(null)
  const [activeTopics, setActiveTopics] = useState({})

  function flipKit(number) {
    setFlippedKit(current => current === number ? null : number)
  }

  function handleCardKeyDown(event, number) {
    if (event.target !== event.currentTarget) return
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      flipKit(number)
    }
  }

  return (
    <main>
      <section className="inner-hero section-cream">
        <div className="container">
          <span className="eyebrow">HANDS-ON ROBOTICS FOR SCHOOLS</span>
          <h1>Choose a kit. <span className="text-orange">Start building.</span></h1>
          <p>Explore four learning pathways. Flip any kit to see what students, teachers and schools can expect from the program.</p>
        </div>
      </section>
      <section className="section section-white demo-kits-section" id="demo-kits">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">FOUR WAYS TO GET TINKERING</span>
            <h2>Demo kits for <span className="text-orange">curious minds.</span></h2>
            <p>Each pathway brings kit activities together with student learning, teacher enablement and digital resources.</p>
          </div>
          <div className="demo-kit-grid">
            {kits.map(kit => {
              const Icon = kit.icon
              const topic = activeTopics[kit.number] || 'kit'
              const isFlipped = flippedKit === kit.number
              const topicInfo = topics.find(item => item.id === topic)
              const TopicIcon = topicInfo.icon
              return (
                <article
                  className={`demo-kit-card kit-${kit.color}${isFlipped ? ' is-flipped' : ''}`}
                  key={kit.number}
                  tabIndex={0}
                  role="group"
                  aria-label={`${kit.name} interactive demo kit`}
                  aria-expanded={isFlipped}
                  onClick={() => flipKit(kit.number)}
                  onKeyDown={event => handleCardKeyDown(event, kit.number)}
                >
                  <div className="demo-kit-card-inner">
                    <div className="demo-kit-face demo-kit-front">
                      <div className="demo-kit-topline">
                        <span className={`demo-kit-icon icon-${kit.color}`}><Icon size={24} /></span>
                        <span className="demo-kit-number">{kit.number}</span>
                      </div>
                      <span className="demo-kit-level">{kit.level}</span>
                      <h3>{kit.name}</h3>
                      <p>{kit.summary}</p>
                      <span className="demo-kit-flip-hint">Explore this kit <ArrowRight size={16} /></span>
                    </div>
                    <div className="demo-kit-face demo-kit-back">
                      <button className="demo-kit-back-button" type="button" onClick={event => { event.stopPropagation(); flipKit(kit.number) }}>
                        <ArrowLeft size={15} /> Back to kit
                      </button>
                      <span className="demo-kit-level">{kit.level}</span>
                      <h3>{kit.name}</h3>
                      <div className="demo-kit-tabs" role="tablist" aria-label={`${kit.name} information`}>
                        {topics.map(item => {
                          const TabIcon = item.icon
                          return (
                            <button
                              className={topic === item.id ? 'demo-kit-tab active' : 'demo-kit-tab'}
                              key={item.id}
                              type="button"
                              role="tab"
                              aria-selected={topic === item.id}
                              onClick={event => {
                                event.stopPropagation()
                                setActiveTopics(current => ({ ...current, [kit.number]: item.id }))
                              }}
                            >
                              <TabIcon size={14} /><span>{item.label}</span>
                            </button>
                          )
                        })}
                      </div>
                      <div className="demo-kit-detail" role="tabpanel">
                        <span className={`demo-kit-detail-icon icon-${kit.color}`}><TopicIcon size={18} /></span>
                        <p>{kit.details[topic]}</p>
                      </div>
                      <Link className="demo-kit-contact" to="/contact" onClick={event => event.stopPropagation()}>
                        Ask about this kit <ArrowRight size={15} />
                      </Link>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
          <div className="project-end-cta">
            <h2>Want to see the program in action?</h2>
            <p>Talk with our team about a demo for your school.</p>
            <Link to="/contact" className="button button-primary">Contact us <ArrowRight size={17} /></Link>
          </div>
        </div>
      </section>
    </main>
  )
}
