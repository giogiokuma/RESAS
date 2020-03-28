!(function(){    
    var apiListTSV = (function () {

"name"    "url"
都道府県一覧  api/v1-rc.1/prefectures
/*市区町村一覧  api/v1-rc.1/cities
旧市区町村一覧 api/v1-rc.1/oldCities
産業大分類   api/v1-rc.1/industries/broad
産業中分類   api/v1-rc.1/industries/middle
産業小分類   api/v1-rc.1/industries/narrow
職業大分類   api/v1-rc.1/jobs/broad
職業中分類   api/v1-rc.1/jobs/middle
特許.技術分野 api/v1-rc.1/patents/broad
特許.技術テーマ    api/v1-rc.1/patents/middle
税関  api/v1-rc.1/customs
輸出入花火図.取引国_地域   api/v1-rc.1/regions/broad
輸出入花火図.取引国_国    api/v1-rc.1/regions/middle
農業部門    api/v1-rc.1/regions/agricultureDepartments
特許権者の所在地    api/v1-rc.1/patents/locations
輸出入花火図.品目_大分類   api/v1-rc.1/tradeInfoItemTypes/broad
輸出入花火図.品目_中分類   api/v1-rc.1/tradeInfoItemTypes/middle
輸出入花火図.品目_小分類   api/v1-rc.1/tradeInfoItemTypes/narrow
特許一覧    api/v1-rc.1/industry/patent/list
国、税関別輸出入    api/v1-rc.1/industry/export/fromTo
海外への企業進出動向  api/v1-rc.1/industry/globalmarket/perPref
産業別特化係数 api/v1-rc.1/industry/power/forIndustry
地域別特化係数 api/v1-rc.1/industry/power/forArea
製造業事業所単位分析_継続・参入・退出事業所別の推移  api/v1-rc.1/industry/power/forManufacturerEstablishments
農産物の出荷先別販売金額構成  api/v1-rc.1/agriculture/sales/shipValue
農産物の出荷先別経営体数割合  api/v1-rc.1/agriculture/sales/shipRatio
経営耕地面積  api/v1-rc.1/agriculture/land/forStacked
経営耕地面積規模別の経営体割合 api/v1-rc.1/agriculture/land/Ratio
農地流動化率  api/v1-rc.1/agriculture/land/forMobility
耕作放棄地率  api/v1-rc.1/agriculture/land/forAbandonment
農業部門別販売金額   api/v1-rc.1/agriculture/all/forStacked
年間延べ農作業日数   api/v1-rc.1/agriculture/crops/workingDays
農産物販売金額（人日あたり）  api/v1-rc.1/agriculture/crops/sales
農業経営者・農業就業人口の年齢構成   api/v1-rc.1/agriculture/crops/farmersAgeStructure
農業経営者・農業就業人口の平均年齢   api/v1-rc.1/agriculture/crops/farmersAverageAge
農業生産関連事業の実施状況（経営体数） api/v1-rc.1/agriculture/crops/relatedBusiness
農業経営体の法人化率  api/v1-rc.1/agriculture/crops/averageOfCorporate
林業総収入（総額）   api/v1-rc.1/forestry/income/forStacked
林産物販売金額（経営体あたり） api/v1-rc.1/forestry/income/forSales
林作業請負収入（経営体あたり） api/v1-rc.1/forestry/income/forContractRevenue
林産物販売金額帯別の経営体割合 api/v1-rc.1/forestry/income/forSalesRatio
林作業請負収入金額帯別の経営体割合   api/v1-rc.1/forestry/income/forContractRevenueRatio
主要林業部門別延べ経営体数   api/v1-rc.1/forestry/income/allPortfolio
主要林業部門別延べ経営体数構成 api/v1-rc.1/forestry/income/allForStacked
主要海面漁業種類別延べ経営体数構成   api/v1-rc.1/fishery/sea/staple
海面漁獲物等販売金額（総額）  api/v1-rc.1/fishery/sea/totalSales
海面漁獲物等販売金額（経営体あたり）  api/v1-rc.1/fishery/sea/managementUnitSales
海面漁獲物等販売金額帯別の経営体割合  api/v1-rc.1/fishery/sea/sales
海面漁獲物等出荷先別販売金額構成    api/v1-rc.1/fishery/sea/shipValue
海面漁獲物等出荷先別経営体数割合    api/v1-rc.1/fishery/sea/shipRatio
海面養殖販売金額（総額）    api/v1-rc.1/fishery/sea/aquacultureTotalSales
海面養殖販売金額（経営体あたり）    api/v1-rc.1/fishery/sea/aquacultureManagementUnitSales
海面養殖販売金額帯別の経営体割合    api/v1-rc.1/fishery/sea/aquacultureSales
指定地域への国籍別訪問者数   api/v1-rc.1/tourism/foreigners/forFrom
指定国籍からの訪問者数 api/v1-rc.1/tourism/foreigners/forTo
人口の自然増減 api/v1-rc.1/population/nature
人口構成    api/v1-rc.1/population/composition/perYear
人口ピラミッド api/v1-rc.1/population/composition/pyramid
人口増減率   api/v1-rc.1/population/sum/perYear
出生数・死亡数／転入数・転出数 api/v1-rc.1/population/sum/estimate
将来人口推計  api/v1-rc.1/population/future/cities
企業数 api/v1-rc.1/municipality/company/perYear
事業所数    api/v1-rc.1/municipality/plant/perYear
創業比率    api/v1-rc.1/municipality/foundation/perYear
一人当たり地方税    api/v1-rc.1/municipality/taxes/perYear
有効求人倍率  api/v1-rc.1/municipality/job/perYear
製造品出荷額  api/v1-rc.1/municipality/manufacture/perYear
従業者数（事業所単位） api/v1-rc.1/municipality/employee/perYear
付加価値額（企業単位） api/v1-rc.1/municipality/value/perYear
労働生産性（企業単位） api/v1-rc.1/municipality/labor/perYear
黒字赤字企業比率    api/v1-rc.1/municipality/surplus/perYear
一人当たり賃金 api/v1-rc.1/municipality/wages/perYear
年間商品販売額 api/v1-rc.1/municipality/sales/perYear*/}).toString().match(/(?:\/\*(?:[\s\S]*?)\*\/)/).pop().replace(/^\/\*/, "").replace(/\*\/$/, "");
    
    
    var apiListTSV = d3.nest()
        .rollup(function(d){ return d[0] })
        .key(function(d){ return d["name"]})
        .map(d3.tsvParse(apiListTSV))
    
    window.RESASAPI = function () {
    
        var _apikey

    
        var _dispatcher = d3.dispatch("load", "changeURL");
        
        var _base = "https://opendata.resas-portal.go.jp/"
        var _type = ""
        var _param = ""
        
        var _url = null
        
        function instance() {
    
        }
    
        instance.apikey = function(_arg){
            if (!arguments.length) return _apikey;
            _apikey = _arg
            return this;
        }
    
        instance.type = function(_arg) { 
            if (!arguments.length) return _type;
            _type = apiListTSV.get(_arg).url;
            _dispatcher.call("changeURL")
            return this;
        }
    
    
        instance.param = function(_arg) { 
            if (!arguments.length) return _param;
            _param = encodeParameter(_arg);
            _dispatcher.call("changeURL")
            return this;
        }
        
    
        instance.url = function(_arg) { 
            if (!arguments.length) return _url;
            _url = _arg
        }
        
    
        instance.send  = function(){
            if(!_apikey) throw new Error("API KEYが指定されていません")
            if(!_url) throw new URIError("リクエストURLが指定されていません")
            d3.request(_url)
                .header("X-API-KEY", _apikey)
                .mimeType("application/json")
                .response(function(xhr) { return JSON.parse(xhr.responseText) })
                .get(function(data){
                    _dispatcher.call("load", this, data);                    
                })            
        }
        

        //rebind
        instance.on = function() {
              _dispatcher.on.apply(_dispatcher, arguments);
        }
        
        instance.on("changeURL", function(){
            _url = _base + _type + "?" + encodeURIComponent(_param)
        })
    
        return instance
    };



function encodeParameter(obj) {
    return Object.keys(obj).map(function(key){ return key +"="+ obj[key] }).join("&")
}

}());