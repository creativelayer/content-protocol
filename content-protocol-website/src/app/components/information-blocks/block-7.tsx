import DetailCard from './detail-card'

export default function Block7 () {
  return (
    <div className="flex flex-col justify-between items-center gap-y-8 md:gap-y-14 h-full">
      <div className="flex flex-col justify-center items-center gap-y-8 md:gap-y-14">
        <h3 className="text-white text-center text-4xl md:text-7xl mx-8 md:mx-28 font-medium">
          $CREATE: The Token Powering the Protocol
        </h3>

        <p className="text-3xl text-[#9CAFC0] text-center px-8 md:px-64">
          $CREATE is the native utility token of Creative Layer. It powers governance, access, incentives, and value flow across every app built on the protocol.
        </p>

        <p className="text-3xl md:text-5xl text-center md:text-left text-white px-8 md:px-64 font-medium">
          What $CREATE unlocks:
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-5 mx-8 md:mx-14">
        <DetailCard title="Governance" description="Governance over protocol upgrades and incentive programs." />

        <DetailCard title="Creator Tools" description="Access to creator tools, minting rights, and premium features." />

        <DetailCard title="Rewards" description="Rewards for creators, fans, remixers, and developers." />

        <DetailCard title="Utility" description="Utility across apps like Duels, Remx, and more." />
      </div>
    </div>
  )
}
