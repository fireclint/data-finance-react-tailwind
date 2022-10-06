const features = [
    { name: 'Architecture ', description: 'Solution Architect, Data Architect,  Cloud and Infrastructure Architect.' },
    { name: 'Analysis ', description: 'Enterprise, Business and Functional Analyst.' },
    { name: 'Implementation ', description: 'Enterprise Application Developers, User Experience designer, Analyst Programmers, Data designers,' },
    { name: 'Technology', description: 'Oracle, Oracle, Sharepoint' },
    { name: 'Methodology', description: 'API first development, Industry recognised Process and methodologies ' },
    { name: 'Infrastructure management ', description: 'Data governance and Master Data Management' },
  ]
  
  export default function Example() {
    return (
      <div className="bg-white font-poppins  ">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div className=" sm:gap-6 lg:gap-8">
            <img
              src="images/business/business1.jpg"
              alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
              className="rounded-lg bg-gray-100"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-blue-600 sm:text-4xl tracking-wider">Team and Methodology</h2>
            <p className="mt-4 text-gray-500 leading-8 tracking-wider">
            TASPro professional management team is armed with 40 years of collective hands-on technical experience. Since 2000 our professional team has worked extensively in major financial services  projects ranging from Client relationship management systems in terms of financial services.
            </p>
  
            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              {features.map((feature) => (
                <div key={feature.name} className="border-t border-gray-200 pt-4">
                  <dt className="font-medium text-gray-900 leading-8 tracking-wider">{feature.name}</dt>
                  <dd className="mt-2 text-sm text-gray-500 leading-7 tracking-wider">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>

        </div>
      </div>
    )
  }
  