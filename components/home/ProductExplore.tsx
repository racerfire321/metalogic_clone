import React from 'react';

const ProductExplorer = () => {
  return (
    <div className="relative w-full bg-products-bg bg-left-bottom bg-no-repeat">
      <div className="container py-20">
        <div className="flex flex-col items-center justify-center">
          <div className="lg:mx-auto lg:w-[80%]">
            <div style={{ opacity: 1, transform: 'none' }}>
              <h2 className="z-50 pb-12 text-4xl font-bold md:w-[50%] md:pb-24 md:text-5xl">Explore Our Products</h2>
            </div>
            <div className="w-full md:mx-auto md:w-full">
              <div>
                <div  className="h-9 items-center justify-center bg-muted p-1 text-muted-foreground rounded-3xl grid grid-cols-2 md:w-[50%] lg:w-[30%]" style={{ outline: 'none' }}>
                  <button type="button"  className="inline-flex items-center justify-center whitespace-nowrap px-3 py-1 text-sm font-medium ring-offset-background focus-visible:outline-none rounded-3xl disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow data-[state=active]:border-primary data-[state=active]:border transition-width transition hover:bg-ui-200" tabIndex={-1} data-orientation="horizontal" data-radix-collection-item="">Banshwali</button>
                  <button type="button"  className="inline-flex items-center justify-center whitespace-nowrap px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none rounded-3xl disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow data-[state=active]:border-primary data-[state=active]:border transition-width" tabIndex={-1} data-orientation="horizontal" data-radix-collection-item="">Digital Khata</button>
                </div>
                <div  className="mt-2 ring-offset-background focus-visible:outline-none" style={{ animationDuration: '2s' }}>
                  <div style={{ opacity: 1, transform: 'none' }}>
                    <div className="rounded-xl border bg-card text-card-foreground shadow my-4 grid md:grid-cols-2">
                      <div className="relative flex items-center justify-center rounded-xl bg-gradient-to-r from-green-400 to-green-100 pb-10 lg:rounded-r-none">
                        <div className="relative overflow-hidden">
                          <img className="w-[250px] p-8 hidden" src="https://www.metalogic.com.np/imageslider/banshwali/chart.svg" alt="Slide 1" />
                          <img className="w-[250px] p-8 hidden" src="imageslider/banshwali/idcard.svg" alt="Slide 2" />
                          <img className="w-[250px] p-8 slide-enter-right" src="imageslider/banshwali/contribution.svg" alt="Slide 3" />
                        </div>
                        <h1 className="absolute bottom-0 hidden p-4 text-ui-500 md:block">Trace the footsteps of your ancestors and discover your family tree's story.</h1>
                      </div>
                      <div className="flex h-full flex-col px-4 pt-4">
                        <div>
                          <h2 className="text-3xl font-bold">Features</h2>
                          <p className="py-4 font-semibold">View full Banshawali chart digitally.</p>
                          <hr />
                        </div>
                        <ul className="flex list-disc flex-col gap-4 py-4 pl-4">
                          <li>View your Banshaj information all in one place.</li>
                          <li>Bring all generations together under one roof creates a unique opportunity for shared experiences, mutual learning, and the strengthening of family bonds.</li>
                          <li>Manage and learn about events nearby you.</li>
                        </ul>
                        <div className="flex self-center px-8 pb-3 pt-10 lg:self-end">
                          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 border bg-transparent shadow-sm h-9 px-4 py-2 border-secondary-300 text-secondary-300 transition-all duration-500 hover:bg-secondary-300 hover:text-white">
                            <a aria-label="Learn more about our digital banshwali" className="flex items-center gap-2 " href="/banshwali">Learn more<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right "><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></a>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div   className="mt-2 ring-offset-background focus-visible:outline-none"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductExplorer;
