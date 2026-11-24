
const ContentBuilder = ({data, titleAs = 'h1'}: any) => {
  // Pages that stack several ContentBuilders pass titleAs="h2" so each page keeps a single H1.
  const Title = titleAs;
  return (
    <div className="content-builder">
      <Title className='content-builder-title mt-10'>
        {data.title}
      </Title>
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
