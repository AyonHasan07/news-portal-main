const loadButton = async() =>{
    const res = await fetch("https://openapi.programming-hero.com/api/news/categories");

    const data = await res.json();
    
    // const category = ;
    const categoryContainer = document.getElementById('category-container');
    data.data.news_category.forEach((item) => {
        console.log(item.category_id);
        
        const div = document.createElement("div");
        // button.innerText = `${item.category_name}`;
        div.innerHTML = `<button onclick="loadNews('${item.category_id}')" class="btn my-4"> ${item.category_name} </button>`;

        // categoryContainer.appendChild(button);
        categoryContainer.appendChild(div);


    });
}




const loadNews = async(catId)=>{
    const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${catId}`);
    const data = await res.json();
    // console.log(data,data);

    const newsContainer = document.getElementById('news-container');

    data.data.forEach((item) =>{
        newsContainer.innerHTML = '';
        // console.log(item.details);
        const div = document.createElement("div");
        div.innerHTML = `
        <div class="hero bg-base-200 bg-[#FFFFFF]">
                <div class="hero-content flex-col lg:flex-row">
                  <img src="${item.thumbnail_url}" class="max-w-sm rounded-lg shadow-2xl" />
                  <div>
                    <h1 class="text-xl text-[#121221] font-bold">${item.title}</h1>
                    <p class="py-2 text-[#949494] ">${item.details.slice(0,350)}</p>
                    <!-- <button class="btn btn-primary">Get Started</button> -->
                    <div class="flex justify-between items-center p-5">
                        <!-- Author -->
                        <div class="flex justify-center items-center gap-4">
                            <div class="avatar">
                                <div class="w-12 rounded-full">
                                  <img src="${item.author.img}" />
                                </div>
                              </div>
                              <div class="">
                                <p class="text-[#2B2C34] font-medium">${item.author.name}</p>
                                <p class="text-[#718797]">${item.author.published_date} </p>
                              </div>

                        </div>

                        <div class="flex justify-center items-center gap-4">
                            <i class="fa-regular fa-eye"></i>
                            <p class="">${item.total_view}</p>
                        </div>

                        <div class="flex justify-center items-center">
                            <div class="rating rating-lg">
                                <input type="radio" name="rating-9" class="rating-hidden" />
                                <input type="radio" name="rating-9" class="mask mask-star-2" />
                                <input type="radio" name="rating-9" class="mask mask-star-2" checked />
                                <input type="radio" name="rating-9" class="mask mask-star-2" />
                                <input type="radio" name="rating-9" class="mask mask-star-2" />
                                <input type="radio" name="rating-9" class="mask mask-star-2" />
                              </div>
                        </div>

                        <div class="flex justify-center items-center">
                            <i class="fa-solid fa-arrow-right"></i>
                        </div>

                    </div>
                  </div>
                </div>
              </div>
        `;

        newsContainer.appendChild(div);
    })
}



loadNews('01');
loadButton();