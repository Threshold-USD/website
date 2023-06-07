import Link from "next/link";
import { Dispatch, SetStateAction, useState } from "react";

type governanceView = "tokenHolder" | "stakeHolder" | "multisig"

type GovernernanceConstitution = {
  tokenHolder: {
    title: string
    description: string
  }
  stakeHolder: {
    title: string
    description: string
  }
  multisig: {
    title: string
    description: string
  }
}

const governanceConstitution: GovernernanceConstitution = {
  tokenHolder: {
    title: "Tokenholder DAO",
    description: "The Token Holder DAO is in charge of managing the treasury, token issuance, and governance system changes along with holding veto privileges over Staker DAO proposals."
  },
  stakeHolder: {
    title: "Stakeholder DAO",
    description: "The Staker DAO in Threshold has an active and operational role of being responsible for approving or declining smart contract upgrades and certain protocol parameters."
  },
  multisig: {
    title: "Multisig Council",
    description: "During the on-chain phase, the Elected Council can veto any proposal. This is intended to be an extra security mechanism in the event that a dangerous proposal passes."
  },
}
type SelectedConstitutionPanelProps = {
  title: string
  description: string
}

const SelectedConstitutionPanel = ({ title, description }:SelectedConstitutionPanelProps): JSX.Element => {
  return (
    <div className="flex flex-col gap-4 items-center sm:items-start justify-center py-12 sm:py-0 px-8 sm:px-0 sm:pl-16 bg-grey5 rounded-2xl border border-grey7 w-full h-full sm:h-[16.5rem] text-center sm:text-left">
      <span className="text-4xl sm:text-xl font-bold">
        {title}
      </span>
      <p className="font-semibold text-grey6 sm:pr-28">
        {description}
      </p>
      <div className="flex mt-1.5">
        <Link href="https://docs.threshold.network/governance/dao/governance-process" target="_blank" rel="noopener noreferrer">
          <button className="flex items-center gap-2 button-with-gradient bg-transparent text-black text-sm font-bold rounded-full px-10 py-2.5 hover:bg-grey2/20">
            <span>
              {"Read More ->"}
            </span>
          </button>
        </Link>
      </div>
    </div>
  )
};

type ConstitutionButtonProps = {
  title: string
  governanceView: governanceView
  selectedView: governanceView
  setGovernanceView: Dispatch<SetStateAction<governanceView>>
}

const ConstitutionButton = ({ title, governanceView, selectedView, setGovernanceView }: ConstitutionButtonProps): JSX.Element => {
  return <button 
  className={`flex justify-center py-5.5 px-3 bg-grey5 hover:bg-grey2/30 rounded-2xl text-lg font-bold cursor-pointer ${governanceView === selectedView ? "border-gradient" : "border border-grey7"}`}
  onClick={() => setGovernanceView(governanceView)}
>
  {title}
</button>
};

const GovernanceConstitution = (): JSX.Element => {
  const [governanceView, setGovernanceView] = useState<governanceView>("tokenHolder")
  const selectedConstitution = governanceConstitution[governanceView as keyof GovernernanceConstitution]

  return (
    <>
     <div className="flex flex-col items-center sm:items-start w-full text-center sm:text-left">
        <span className="text-4xl sm:text-35xl font-bold">Governance constitution</span>
        <p className="mt-4 sm:text-lg font-semibold text-grey6">
          The DAO has three primary bodies:<br />Token Holder DAO, Staker DAO, and the Elected Council.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row items-start gap-11 w-full">
        <div className="flex flex-col w-full sm:w-[30rem] gap-6">
          {Object.keys(governanceConstitution).map((constitution, index) => {
            return (
              <ConstitutionButton
                key={index}
                title={governanceConstitution[constitution as keyof GovernernanceConstitution].title} 
                governanceView={constitution as governanceView}
                selectedView={governanceView}
                setGovernanceView={setGovernanceView}
              />
            )
          })}
        </div>
        <SelectedConstitutionPanel 
          title={selectedConstitution.title}
          description={selectedConstitution.description}
        />
      </div>
    </>
  );
};

export default GovernanceConstitution;