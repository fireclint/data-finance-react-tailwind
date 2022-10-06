import { BoltIcon, ChatBubbleBottomCenterTextIcon, GlobeAltIcon, ScaleIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Best in Class',
    description:
      'Why/ What/ How – Business and Technology At TASPro, we strive to understand ‘Why’ organization exists and ‘What’ they do to meet the ‘Why’. Technology is a key enabler to bridge the gap between ‘Why’ and ‘What’.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Why',
    description:
      'At TASPro we believe in business empowerment through technology. Through our exclusive and extensive software development experience we have gained purposeful business insights into conceptualising and implementing business minded solutions that are tangible, scalable and robust.',
    icon: ScaleIcon,
  },
  {
    name: 'What',
    description:
      'Business systems design & development, Business Process Improvements, Back office IT & helpdesk support, Digital transformation and Technology Modernisation',
    icon: BoltIcon,
  },
  {
    name: 'How',
    description:
      'We conceptualise,design,implement and support. Our IT solutions are backed by industry knowledge and expert IT Team. From a simple App design to Enterprise Systems our solutions are tactical,analytical and strategical. We hold ourselves accountable for our clients technology enablement.',
    icon: ChatBubbleBottomCenterTextIcon,
  },
]

export default function Example() {
  return (
    <div className="bg-gray-50 py-12 font-poppins   ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8  ">
        <div className="lg:text-center  ">
          <h2 className="text-4xl font-semibold text-[#2563eb] tracking-wider">Business Enablement</h2>
          {/* <p className="mt-2 text-3xl font-bold text-gray-900 sm:text-5xl tracking-wider">
            A better way to send money
          </p> */}
          <p className="mt-4 max-w-4xl text-xl text-gray-700 lg:mx-auto leading-8 tracking-wider">
          Since 2003, provding a business focused, professional and practical end to end technology solutions to ease business problems. Our solutions are tactical, analytical, strategical with focus on one primary goal
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-[#2563eb] text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg font-medium leading-10 tracking-wider text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500 leading-9 tracking-wider">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
