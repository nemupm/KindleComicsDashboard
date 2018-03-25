import { KindleService } from './KindleService';

const xmlString = `
  <response>
      <sync_time>
          SYNC_TIME
      </sync_time>
      <cache_metadata>
          <version>
              1
          </version>
      </cache_metadata>
      <add_update_list>
          <meta_data>
              <asin>
                  ASIN
              </asin>
              <title pronunciation="title">
                  TITLE_LEFT（１）TITLE_RIGHT
              </title>
              <authors>
                  <author pronunciation="author">
                      AUTHOR
                  </author>
              </authors>
              <publishers>
                  <publisher>
                      PUBLISHER
                  </publisher>
              </publishers>
              <publication_date>
                  2017-12-04T00:00:00+0000
              </publication_date>
              <purchase_date>
                  2017-12-04T00:00:00+0000
              </purchase_date>
              <textbook_type>
              </textbook_type>
              <cde_contenttype>
                  EBOK
              </cde_contenttype>
              <content_type>
                  application/x-mobipocket-ebook
              </content_type>
          </meta_data>
          <meta_data>
              <asin>
                  ASIN
              </asin>
              <title pronunciation="title">
                  TITLE_LEFT（２）TITLE_RIGHT
              </title>
              <authors>
                  <author pronunciation="author">
                      AUTHOR
                  </author>
              </authors>
              <publishers>
                  <publisher>
                      PUBLISHER
                  </publisher>
              </publishers>
              <publication_date>
                  2018-03-16T00:00:00+0000
              </publication_date>
              <purchase_date>
                  2018-03-16T00:00:00+0000
              </purchase_date>
              <textbook_type>
              </textbook_type>
              <cde_contenttype>
                  EBOK
              </cde_contenttype>
              <content_type>
                  application/x-mobipocket-ebook
              </content_type>
          </meta_data>
          <meta_data>
              <asin>
                  ASIN
              </asin>
              <title pronunciation="title">
                  TITLE_LEFT（３）TITLE_RIGHT
              </title>
              <authors>
                  <author pronunciation="author">
                      AUTHOR
                  </author>
              </authors>
              <publishers>
                  <publisher>
                      PUBLISHER
                  </publisher>
              </publishers>
              <publication_date>
                  2018-06-16T00:00:00+0000
              </publication_date>
              <purchase_date>
                  2018-06-16T00:00:00+0000
              </purchase_date>
              <textbook_type>
              </textbook_type>
              <cde_contenttype>
                  EBOK
              </cde_contenttype>
              <content_type>
                  application/x-mobipocket-ebook
              </content_type>
          </meta_data>
          <meta_data>
              <asin>
                  ASIN
              </asin>
              <title pronunciation="title">
                  TITLE 第1巻
              </title>
              <authors>
                  <author pronunciation="author">
                      著者
                  </author>
              </authors>
              <publishers>
                  <publisher>
                      出版社
                  </publisher>
              </publishers>
              <publication_date>
                  2018-04-05T00:00:00+0000
              </publication_date>
              <purchase_date>
                  2018-04-06T00:00:00+0000
              </purchase_date>
              <textbook_type>
              </textbook_type>
              <cde_contenttype>
                  EBOK
              </cde_contenttype>
              <content_type>
                  application/x-mobipocket-ebook
              </content_type>
          </meta_data>
          <meta_data>
              <asin>
                  ASIN
              </asin>
              <title pronunciation="title">
                  TITLE 第2巻
              </title>
              <authors>
                  <author pronunciation="author">
                      著者
                  </author>
              </authors>
              <publishers>
                  <publisher>
                      出版社
                  </publisher>
              </publishers>
              <publication_date>
                  2018-09-05T00:00:00+0000
              </publication_date>
              <purchase_date>
                  2018-09-06T00:00:00+0000
              </purchase_date>
              <textbook_type>
              </textbook_type>
              <cde_contenttype>
                  EBOK
              </cde_contenttype>
              <content_type>
                  application/x-mobipocket-ebook
              </content_type>
          </meta_data>
          <meta_data>
              <asin>
                  ASIN
              </asin>
              <title pronunciation="title">
                  INDEPENDENT TITLE
              </title>
              <authors>
                  <author pronunciation="author">
                      CHOSHA
                  </author>
              </authors>
              <publishers>
                  <publisher>
                      SHUPPANSHA
                  </publisher>
              </publishers>
              <publication_date>
                  2018-01-05T00:00:00+0000
              </publication_date>
              <purchase_date>
                  2018-01-06T00:00:00+0000
              </purchase_date>
              <textbook_type>
              </textbook_type>
              <cde_contenttype>
                  EBOK
              </cde_contenttype>
              <content_type>
                  application/x-mobipocket-ebook
              </content_type>
          </meta_data>
      </add_update_list>
  </response>
  `;

it('load XML without crashing', () => {
  const kindleService = new KindleService(xmlString);
  kindleService.getKindleComicSeries();
});
