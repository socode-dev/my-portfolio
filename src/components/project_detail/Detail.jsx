const Detail = ({ caseStudy }) => {
  if(!caseStudy) return null;
  
  return (
    <div className="space-y-4 md:col-span-3">
      {caseStudy.map(cs => (
        <div key={cs.id} className="space-y-2">
          <h4 className="text-xl text-[rgb(var(--color-text))] font-bold">
          {cs.heading}
        </h4>
        
        <p className="text-base text-[rgb(var(--color-muted))] font-medium">{cs.text}</p>
        
        {cs.text2 && <p className="text-base text-[rgb(var(--color-muted))] font-medium">{cs.text2}</p>}

        {cs.text3 && <p className="text-base text-[rgb(var(--color-muted))] font-medium">{cs.text3}</p>}

        {(cs.text4) && <p className="text-base text-[rgb(var(--color-muted))] font-medium">{cs.text4}</p>}
        </div>
      ))}
    </div>
  );
};

export default Detail;
