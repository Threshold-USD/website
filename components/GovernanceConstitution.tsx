import Link from "next/link";
import { Dispatch, SetStateAction, useState } from "react";
import LazyText from './LazyText';

type governanceView = "tokenHolder" | "multisig"

type GovernernanceConstitution = {
  tokenHolder: {
    title: JSX.Element
    description: JSX.Element
  }
  multisig: {
    title: JSX.Element
    description: JSX.Element
  }
}

type SelectedConstitutionPanelProps = {
  title: JSX.Element
  description: JSX.Element
}

const SelectedConstitutionPanel = ({ title, description }:SelectedConstitutionPanelProps): JSX.Element => {
  return (
    <div className="flex flex-col gap-4 items-center sm:items-start justify-center py-12 sm:py-0 px-8 sm:px-0 sm:pl-16 bg-grey5 rounded-2xl border border-grey7 w-full h-full sm:h-[16.5rem] text-center sm:text-left">
      <span className="text-4xl sm:text-xl font-bold">
        {title}
      </span>
      <p className="text-sm lg:text-base font-semibold text-grey6 pr-4 lg:pr-28">
        {description}
      </p>
      <div className="flex mt-1.5">
        <Link href="https://docs.threshold.network/governance/dao/governance-process" target="_blank" rel="noopener noreferrer">
          <button className="flex items-center gap-2 button-with-gradient bg-transparent text-black text-sm font-bold rounded-full px-10 h-10 hover:bg-grey2/20">
            <span className="flex items-center justify-center">
              <LazyText text="governancePageButtonCTA" className="h-3.5 w-24" />
            </span>
          </button>
        </Link>
      </div>
    </div>
  )
};

type ConstitutionButtonProps = {
  title: JSX.Element
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
  
  const governanceConstitution: GovernernanceConstitution = {
    tokenHolder: {
      title: <LazyText text="governancePageFirstConstitutionName" className="h-3.5 w-40 sm:w-56" />,
      description: <LazyText text="governancePageFirstConstitutionDescription" className="h-3.5 w-40 sm:w-56 lg:w-80 xl:w-104" numberOfLines={3} />
    },
    multisig: {
      title: <LazyText text="governancePageSecondConstitutionName" className="h-3.5 w-40 sm:w-56" />,
      description: <LazyText text="governancePageSecondConstitutionDescription" className="h-3.5 w-40 sm:w-56 lg:w-80 xl:w-104" numberOfLines={3} />
    },
  }

  const selectedConstitution = governanceConstitution[governanceView as keyof GovernernanceConstitution]

  return (
    <>
     <div className="flex flex-col items-center sm:items-start w-full text-center sm:text-left">
        <span className="text-4xl sm:text-35xl font-bold">
          <LazyText text="governancePageConstitutionComponentTitle" className="h-8 w-40 sm:w-60 lg:w-80 xl:w-96" />
        </span>
        <p className="mt-4 sm:text-lg font-semibold text-grey6">
          <LazyText text="governancePageConstitutionComponentSubtitleFirstLine" className="h-4 w-40 sm:w-60 lg:w-80" />
          <br />
          <LazyText text="governancePageConstitutionComponentSubtitleSecondLine" className="h-4 w-40 sm:w-60 lg:w-80 xl:w-104" />
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