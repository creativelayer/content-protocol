import DetailCard from './detail-card'

export default function Block7 () {
  return (
    <div className="flex flex-col justify-between items-center gap-y-14 h-full">
      <div className="flex flex-col justify-center items-center gap-y-14">
        <h3 className="text-white text-center text-7xl px-28 font-medium">
          TGE Incoming
        </h3>

        <p className="text-3xl text-[#9CAFC0] text-center px-64">
          We’re preparing for a fair launch of $CREATE. No private sales. Just onchain distribution to the community.
        </p>

        <p className="text-5xl text-white px-64 font-medium">
          Distributed through:
        </p>
      </div>

      <div className="grid grid-cols-2 justify-center items-center gap-5 mx-14">
        <DetailCard title="Community Airdrops" description="Rewards for early supporters, collectors, and creators." />

        <DetailCard title="Gamified Participation" description="Engage with challenges, and creative tasks to earn $CREATE." />

        <DetailCard title="Contributor Rewards" description="Tokens allocated to those who’ve actively contributed to the project." />
        <DetailCard title="Public Crowdfund" description="A transparent, onchain launch where anyone can participate." />
      </div>
    </div>
  )
}
