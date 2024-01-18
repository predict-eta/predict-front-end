export enum POST_CATEGORY {
  news = 'News',
  noticeForUse = 'Notice For Use',
}

export type PostProps = {
  id: number
  image: String
  title: String
  dateTime: String
  description?: String
  content: String
  category: POST_CATEGORY
}
const image =
  'https://images.unsplash.com/photo-1605745341112-85968b19335b?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
export const dataPosts: PostProps[] = [
  {
    id: 1,
    title: 'What is Estimated Time of Arrival (ETA)?',
    dateTime: '7 days ago',
    description: 'What is estimated time of arrival?',
    content:
      '<p>Estimated time of arrival, commonly known as ETA, is a frequently used term globally to denote the time of coming. In the shipping &amp; logistics industry, it is used to forecast when the shipment will arrive at its final port of destination.</p><p>Carries give arrival estimates to the consignees to provide a rough idea of when the vessel will arrive at the final port and prepare the next steps accordingly. It happens that the container&nbsp;doesn’t arrive at ETA.</p><p>Estimated time of arrival (ETA) for a vessel, container, or package in transit can help the receiver track their shipment without having to call the shipment office. Simultaneously, the operational teams can use this data to optimize delivery schedules and improve predictability.</p><h2><strong>How to Calculate Estimated Time of Arrival</strong></h2><p>While calculating the ETAs, multiple factors are taken into consideration. These include:</p><ul><li>Distance between origin and destination</li><li>The average speed of the vessel</li><li>Number of Port of Calls</li><li>Climate and weather conditions</li><li>Time required to refill the fuel</li><li>Port traffic and congestion</li><li>Unforeseen emergencies, among others.</li></ul><p>Taking in the factors involved, you can calculate the estimated time of arrival by the formula:</p><p><strong>Estimated time of departure + Estimated time in transit = Estimated time of arrival (ETA)</strong></p><p>While providing ETAs, carriers need to estimate the time involved in processes accurately. Here, real-time visibility through API integration and smart technology helps in tracking the vessels and giving a precise time of arrival at the port for the vessel or container.</p>',
    image,
    category: POST_CATEGORY.noticeForUse,
  },
  {
    id: 2,
    title: 'What is Route Scheduling?',
    dateTime: '9 months ago',
    content:
      '<p>Routing is at the core of what we do here at SmartRoutes. Our mission is to ensure that the routes that businesses use to deliver and serve their customers are the most efficient and optimal they can be. This is ultimately what drives huge cost savings and improves experiences for our customers.</p><p>However,<strong>&nbsp;route scheduling&nbsp;</strong>is something we also pay particular attention to in the development of our&nbsp;delivery management software.</p><p>While route planning, route optimization, and route scheduling are all inextricably linked in the delivery planning process, each one plays its own role in the success of a logistics operation.</p><p>In this blog, we’ll take a look at what exactly route scheduling involves, why it is important, who it affects in a delivery business, and who is ultimately responsible for the task in a transport business</p>',
    image,
    category: POST_CATEGORY.news,
  },
  {
    id: 3,
    title:
      'What is Forward & Backward Scheduling? (and how it relates to logistics)',
    dateTime: '9 months ago',
    content:
      '<p>Regular readers of our blog will be no strangers to the increasing demands of customers facing the last-mile delivery industry. Working with both retailers and third-party logistics businesses to solve their delivery problems, they are constantly reminding us just how much is expected of them in the age of convenience.</p><p>To meet these demands, businesses have turned to tried-and-tested logistics strategies that can deliver on promises to customers, while making their operations more efficient. One of these strategies is&nbsp;<strong>forward and backward scheduling.</strong></p><p>We’ll take a look at what forward it involves, define it and get into the thick of how it works for the delivery and logistics industry. We’ll also use some practical examples of how we have helped delivery businesses establish their own backward and forward scheduling processes with the help of delivery management technology.</p><p>So whether you’re a courier, retailer, or just looking to learn some more about the topic, we think you’ll find what you’re after.</p><h2>What is forward scheduling?</h2><p>Forward scheduling is a method of planning the desired completion date of a specific task. With forward scheduling, the idea is that you start and complete the job at the earliest date possible.</p><p>For example, if a restaurant has recently renovated its kitchen and ordered new appliances, it may plan to install all of the new appliances from Monday to Friday in one week. If you are the one delivering the new cooker, you would schedule the delivery for Monday morning under the principle of forward scheduling.</p><p>As the name suggests, you are planning&nbsp;<em>‘forward</em>’ your deliveries for that week with additional orders to follow.</p>',
    image,
    category: POST_CATEGORY.news,
  },
]
