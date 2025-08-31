
const ContentBuilder = ({data}: any) => {
  return (
    <div className="content-builder">
      <h1 className='mt-10'>
        {data.title}
      </h1>
      <div>
        {
          data.details.map((detail: any, index: any) => (
            <div key={`${detail.title}${index}`}>
              <h2>{detail.title}</h2>
              <p>{detail.description}</p>
              {
                detail.listType ? (
                  <ul>
                    <p>{detail.listTitle}</p>
                    {
                      // @ts-ignore
                      detail.item.map((item, index) => (
                        <li key={`${index}-${item}`}>{item}</li>
                      ))
                    }
                  </ul>
                ) : (
                  // @ts-ignore
                  detail.item.map((item, index) => (
                    <p key={`${index}-${item}`}>{item}</p>
                  ))
                )
              }
            </div>
          ))
        }
      </div>
      <b><i>{data.effective}</i></b>
    </div>
  );
};

export default ContentBuilder;
