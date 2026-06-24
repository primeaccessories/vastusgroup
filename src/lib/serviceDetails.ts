// AUTO-GENERATED detail-page content for Vastus services.
// Merged into SERVICES at load time (see services.ts). Edit freely.
import type { ServiceSection } from './services'

export interface ServiceDetail {
  description: string
  features: string[]
  sections: ServiceSection[]
}

export const SERVICE_DETAILS: Record<string, ServiceDetail> = {
  "pay-by-link": {
    "description": "Create a secure payment link, send it by text, email or social, and let your customer pay by card or mobile wallet — no terminal needed.",
    "features": [
      "Send by text or email",
      "No terminal required",
      "Card & mobile wallets",
      "Secure hosted checkout"
    ],
    "sections": [
      {
        "kind": "prose",
        "eyebrow": "Overview",
        "heading": "Get paid without a card machine",
        "body": "Pay by Link lets you take a card payment from anywhere, without a terminal or website. You generate a secure link, send it to your customer however suits them — text, email, WhatsApp or a social message — and they pay on a hosted checkout page. It's ideal for deposits, invoices, phone orders and quotes, so you can confirm the sale the moment the customer is ready."
      },
      {
        "kind": "cards",
        "heading": "Built for the way you sell",
        "items": [
          {
            "title": "Take deposits up front",
            "desc": "Secure a booking or order before you start the work by sending a link for a deposit, then collect the balance the same way later."
          },
          {
            "title": "Settle invoices faster",
            "desc": "Add a payment link to the invoices you already send so customers can pay on the spot rather than arranging a bank transfer."
          },
          {
            "title": "Close phone and remote sales",
            "desc": "Take payment from customers who aren't in front of you — over the phone, by message or on social — without reading card details aloud."
          },
          {
            "title": "Sell without a website",
            "desc": "No online shop or checkout to build. Create a link for a product or service and share it, then reuse or reissue it whenever you need."
          }
        ]
      },
      {
        "kind": "faq",
        "heading": "Pay by Link questions",
        "items": [
          {
            "q": "Do my customers need an account or app to pay?",
            "a": "No. They simply tap the link and pay on a secure hosted page using their card or mobile wallet — there's nothing to download and no account to set up."
          },
          {
            "q": "Is it safe to send payment links this way?",
            "a": "Yes. Card details are entered on a secure checkout page that follows recognised PCI compliance standards, so sensitive information never passes through your phone, inbox or messages."
          },
          {
            "q": "What can I use Pay by Link for?",
            "a": "Deposits, invoices, phone and remote orders, quotes and one-off sales. Anywhere you'd normally chase a bank transfer or reach for a card machine, a link will do the job."
          },
          {
            "q": "How will I know when I've been paid?",
            "a": "You'll see when a link has been paid so you can confirm the order or release the work straight away. As with all Vastus PAY services, you're supported by a UK-based team."
          }
        ]
      }
    ]
  },
  "qr-payments": {
    "description": "Display a QR code at the till, table or counter and customers scan to pay securely from their own phone — no extra hardware required.",
    "features": [
      "No terminal needed",
      "Pay from any phone",
      "Secure by design",
      "Set up in minutes"
    ],
    "sections": [
      {
        "kind": "prose",
        "eyebrow": "Overview",
        "heading": "Payments that fit in a printed square",
        "body": "QR payments let you take card and mobile wallet payments without handing over a terminal. You display a QR code — on a sticker, a table card, a receipt or a screen — and the customer scans it with their phone camera to reach a secure checkout. It is a simple way to accept payment at the table, on the doorstep, in a queue or anywhere a traditional card machine feels like overkill."
      },
      {
        "kind": "cards",
        "heading": "Where QR payments earn their keep",
        "items": [
          {
            "title": "Pay at the table",
            "desc": "Hospitality teams can place a code on every table so guests settle the bill in their own time, without waiting for a machine to be brought over."
          },
          {
            "title": "On the move",
            "desc": "Market stalls, deliveries and mobile traders can take payment from a printed code, keeping kit and queues to a minimum."
          },
          {
            "title": "Counter and click-and-collect",
            "desc": "Display a code at the till or on collection slips so customers can pay from their phone while staff carry on serving."
          }
        ]
      },
      {
        "kind": "list",
        "heading": "What you get with Vastus QR payments",
        "items": [
          "Accept card and mobile wallet payments through a secure scan",
          "No card terminal or app download required for your customers",
          "Codes you can print, display on screen or add to receipts",
          "Payments processed to recognised PCI security standards",
          "Clear, itemised records of every transaction",
          "Setup that works alongside your existing terminals and tills",
          "Bespoke pricing, with no surprises buried in the small print",
          "Backed by a UK support team when you need a hand"
        ]
      },
      {
        "kind": "faq",
        "heading": "Common questions",
        "items": [
          {
            "q": "Do my customers need a special app to pay?",
            "a": "No. They scan the QR code with their phone's camera, which opens a secure checkout in their browser — no download or account needed."
          },
          {
            "q": "Is paying by QR code secure?",
            "a": "Yes. Payments are handled through a hosted checkout built to recognised PCI security standards, so card details are never stored or seen by you or your staff."
          },
          {
            "q": "Can I use QR payments alongside my card machines?",
            "a": "Absolutely. QR payments sit happily next to your existing terminals — use whichever suits the moment, whether that's the till, a card machine or a printed code."
          },
          {
            "q": "How quickly can I start taking payments?",
            "a": "Setup is straightforward and we get you live quickly. Our UK team handles the configuration and supports you once you're up and running."
          }
        ]
      }
    ]
  },
  "secure-payments": {
    "description": "Every transaction runs through PCI-compliant infrastructure with encryption and fraud monitoring in place, so your takings stay protected and your customers stay confident.",
    "features": [
      "PCI-compliant processing",
      "Built-in fraud monitoring",
      "Encrypted transactions",
      "UK support team"
    ],
    "sections": [
      {
        "kind": "prose",
        "eyebrow": "Overview",
        "heading": "Payments you can trust",
        "body": "Every payment you take should be safe by default. Vastus processes card, contactless and mobile wallet transactions through PCI-compliant infrastructure, with encryption protecting card details from the moment they are entered. Fraud monitoring runs quietly in the background, flagging suspicious activity before it becomes a problem — so you can keep serving customers while we look after the security."
      },
      {
        "kind": "cards",
        "eyebrow": "How we protect you",
        "heading": "Security built into every transaction",
        "items": [
          {
            "title": "PCI compliance as standard",
            "desc": "Card data is handled to recognised PCI DSS standards, so sensitive details are never left exposed on your systems."
          },
          {
            "title": "Encryption end to end",
            "desc": "Card details are encrypted at the point of entry and stay protected as the payment travels through to settlement."
          },
          {
            "title": "Real-time fraud monitoring",
            "desc": "Transactions are screened as they happen, helping to catch unusual patterns and reduce chargebacks before they hit you."
          },
          {
            "title": "Tokenised card storage",
            "desc": "Repeat and recurring payments use tokens in place of real card numbers, keeping stored details out of harm's way."
          }
        ]
      },
      {
        "kind": "list",
        "eyebrow": "What's included",
        "heading": "A complete secure-payments setup",
        "items": [
          "PCI-compliant card, contactless and mobile wallet processing",
          "Encryption of card details from entry through to settlement",
          "Fraud screening and suspicious-activity alerts",
          "Tokenisation for safer recurring and saved-card payments",
          "3D Secure authentication for online and card-not-present sales",
          "Chargeback support to help you respond to disputes",
          "Integration with your terminals, online checkout and accounting tools",
          "A UK support team on hand when you need to talk to someone"
        ]
      },
      {
        "kind": "faq",
        "eyebrow": "Common questions",
        "heading": "Secure payments, answered",
        "items": [
          {
            "q": "What does PCI compliance actually mean for my business?",
            "a": "PCI DSS is the card industry's security standard for handling cardholder data. Processing through Vastus means transactions are managed to that standard, reducing the security burden that would otherwise sit with you."
          },
          {
            "q": "How does fraud protection work day to day?",
            "a": "Transactions are screened in real time against patterns that suggest fraud. Anything unusual can be flagged or held for review, helping to stop fraudulent payments and lower the chargebacks that follow them."
          },
          {
            "q": "Will secure processing slow down checkout for my customers?",
            "a": "No. Encryption, screening and 3D Secure all run in the background. For most customers the payment feels exactly the same — they simply approve and go, with the protection happening behind the scenes."
          },
          {
            "q": "Does this work across all the ways I take payment?",
            "a": "Yes. The same security covers in-person terminals, online checkout and card-not-present sales, so your protection is consistent wherever and however your customers choose to pay."
          }
        ]
      }
    ]
  },
  "business-loans": {
    "description": "Get a lump sum of business funding to steady cashflow or back your next move, with competitive terms matched to your circumstances and subject to status.",
    "features": [
      "Competitive rates",
      "Quick application",
      "Funding for any purpose",
      "Repayments to suit"
    ],
    "sections": [
      {
        "kind": "prose",
        "eyebrow": "Overview",
        "heading": "Funding that fits the way you run your business",
        "body": "A business loan gives you a lump sum up front, repaid over an agreed period so the cost is predictable from day one. Whether you need to smooth a quiet month, cover an unexpected bill or put money behind a real opportunity, Vastus helps you find funding that matches what your business actually needs — without the jargon or the pressure."
      },
      {
        "kind": "cards",
        "heading": "Good for moments like these",
        "items": [
          {
            "title": "Covering everyday costs",
            "desc": "Bridge a slow period, settle a supplier bill or keep cashflow steady when timing works against you, so the day-to-day keeps moving."
          },
          {
            "title": "Investing in growth",
            "desc": "Fund the kit, premises, stock or extra hands you need to take on more work and grow at a pace that suits you."
          },
          {
            "title": "Tidying up finances",
            "desc": "Bring existing borrowing together into one straightforward arrangement, so you have a single repayment to keep track of."
          },
          {
            "title": "Acting on opportunity",
            "desc": "Move quickly when the right deal, contract or seasonal push lands, rather than letting it pass while you wait."
          }
        ]
      },
      {
        "kind": "faq",
        "heading": "Common questions",
        "items": [
          {
            "q": "What can I use a business loan for?",
            "a": "More or less any genuine business purpose — equipment, stock, hiring, refurbishment, consolidating other borrowing or simply covering costs. We will talk through what you are aiming to do and point you towards funding that fits."
          },
          {
            "q": "How does Vastus help?",
            "a": "We take the time to understand your business and what you need the money for, then handle the legwork of matching you to suitable funding. You get plain-English guidance from start to finish, with no obligation to proceed."
          },
          {
            "q": "What will it cost me?",
            "a": "Rates and repayments depend on your circumstances and the type of funding involved, so there is no one figure that fits every business. We will set everything out clearly and competitively before you commit to anything."
          },
          {
            "q": "Will I definitely be approved?",
            "a": "All funding is subject to status, so we cannot promise an outcome in advance. What we can do is understand your situation, give you a straight answer and only put forward options that genuinely suit you."
          }
        ]
      }
    ]
  },
  "asset-finance": {
    "description": "Fund the vehicles, equipment and machinery your business runs on — and pay in manageable instalments rather than a single upfront outlay.",
    "features": [
      "Preserve your cash",
      "Vehicles & machinery",
      "Manageable repayments",
      "Subject to status"
    ],
    "sections": [
      {
        "kind": "prose",
        "eyebrow": "Overview",
        "heading": "What asset finance is",
        "body": "Asset finance lets you acquire the kit your business needs — vehicles, plant, machinery or equipment — and spread the payments over an agreed term instead of buying outright. The asset itself usually underpins the agreement, so your working capital stays free for day-to-day running. Vastus helps you understand the options and introduces you to suitable funding, with terms shaped around your circumstances and subject to status."
      },
      {
        "kind": "cards",
        "heading": "What it is good for",
        "items": [
          {
            "title": "Commercial vehicles",
            "desc": "Vans, cars, HGVs and specialist vehicles — get the fleet on the road without tying up a large lump sum in one go."
          },
          {
            "title": "Plant & machinery",
            "desc": "Production lines, workshop kit and heavy machinery, financed so you can take on more work or replace ageing equipment."
          },
          {
            "title": "Tools & equipment",
            "desc": "From IT and catering kit to trade tools, fund the everyday assets that keep your team productive."
          },
          {
            "title": "Refresh & upgrade",
            "desc": "Replace worn-out assets or upgrade to newer, more efficient models while keeping repayments predictable."
          }
        ]
      },
      {
        "kind": "list",
        "heading": "Why finance assets through Vastus",
        "items": [
          "Keep cash in the business rather than paying everything upfront",
          "Match repayments to how the asset earns its keep over time",
          "Options to suit new or used assets across most sectors",
          "Plain-English guidance on which approach fits your needs",
          "We do the legwork and introduce you to suitable funders",
          "No obligation to proceed once you have seen the options",
          "Funding is subject to status and terms depend on your circumstances"
        ]
      },
      {
        "kind": "faq",
        "heading": "Common questions",
        "items": [
          {
            "q": "What can I fund with asset finance?",
            "a": "Most business-critical assets — commercial vehicles, plant, machinery, tools, technology and equipment. If you are unsure whether something qualifies, tell us what you need and we will talk it through."
          },
          {
            "q": "Can I finance used as well as new assets?",
            "a": "Often, yes. Options exist for both new and used assets, though what is available will depend on the asset and your circumstances, and is always subject to status."
          },
          {
            "q": "How does Vastus help?",
            "a": "We listen to what you are trying to achieve, explain the options in plain English, and introduce you to suitable funding. There is no pressure to proceed."
          },
          {
            "q": "What affects the terms I am offered?",
            "a": "Terms depend on factors such as the asset, your trading history and your business circumstances. All funding is subject to status, so the right fit is agreed case by case."
          }
        ]
      }
    ]
  },
  "invoice-finance": {
    "description": "Turn outstanding invoices into working capital you can use today, instead of waiting weeks or months for customers to pay.",
    "features": [
      "Cash against invoices",
      "Funding grows with sales",
      "Quick & easy application",
      "Subject to status"
    ],
    "sections": [
      {
        "kind": "prose",
        "eyebrow": "Overview",
        "heading": "What invoice finance is",
        "body": "Invoice finance lets you draw down a large share of an invoice's value as soon as it is raised, rather than waiting for your customer's payment terms to run their course. The remaining balance, less an agreed cost, is released once your customer settles. It is a practical way to smooth cash flow when long payment terms leave money tied up in your sales ledger."
      },
      {
        "kind": "cards",
        "heading": "What it is good for",
        "items": [
          {
            "title": "Bridging slow payments",
            "desc": "Keep wages, suppliers and HMRC paid on time even when customers take 30, 60 or 90 days to settle their invoices."
          },
          {
            "title": "Funding growth",
            "desc": "Available funding rises as your invoicing rises, so taking on larger orders does not leave you short of working capital."
          },
          {
            "title": "Reducing admin",
            "desc": "Depending on the facility, credit control and collections can be handled for you, freeing your team to focus on the business."
          },
          {
            "title": "Predictable cash flow",
            "desc": "Convert a sales ledger full of unpaid invoices into a steadier, more reliable flow of cash you can plan around."
          }
        ]
      },
      {
        "kind": "list",
        "heading": "How it works with Vastus",
        "items": [
          "We talk through your business, your customers and how your invoices are paid",
          "We help you choose between factoring and confidential invoice discounting",
          "We introduce you to lenders suited to your sector and trading style",
          "You draw down an agreed portion of each invoice once it is raised",
          "The balance is released when your customer pays, less the agreed cost",
          "Facilities can grow alongside your turnover as your sales increase",
          "All funding is arranged subject to status and your circumstances"
        ]
      },
      {
        "kind": "faq",
        "heading": "Common questions",
        "items": [
          {
            "q": "Will my customers know I am using invoice finance?",
            "a": "It depends on the facility. With confidential invoice discounting your customers need not be aware, while with factoring the provider may handle collections directly. We will explain the trade-offs so you can choose what suits you."
          },
          {
            "q": "What does it cost?",
            "a": "Costs vary with your turnover, sector and the type of facility, so we never quote a flat figure up front. We will set out the terms clearly before you commit to anything."
          },
          {
            "q": "How much can I borrow?",
            "a": "Funding is typically tied to the value of your eligible invoices and grows as you invoice more. The exact amount depends on your ledger and is arranged subject to status."
          },
          {
            "q": "Why use Vastus?",
            "a": "We take time to understand your cash flow before introducing you to lenders, so you are matched with a facility that fits how your business actually trades. The conversation is plain-English and low-pressure throughout."
          }
        ]
      }
    ]
  },
  "commercial-mortgages": {
    "description": "Whether you are buying premises, refinancing an existing loan or funding a development, a commercial mortgage helps you own the space your business trades from.",
    "features": [
      "Purchase or refinance",
      "Owner-occupier & investment",
      "Whole-of-process support",
      "Subject to status"
    ],
    "sections": [
      {
        "kind": "prose",
        "eyebrow": "Overview",
        "heading": "What a commercial mortgage is for",
        "body": "A commercial mortgage is a loan secured against business premises, repaid over an agreed term. It is used to buy the property your business trades from, to refinance an existing facility onto better terms, or to fund the development of a site. Vastus helps you understand the options, prepare a strong case and connect with lenders suited to your circumstances."
      },
      {
        "kind": "cards",
        "heading": "When a commercial mortgage makes sense",
        "items": [
          {
            "title": "Buying your premises",
            "desc": "Stop renting and put repayments towards an asset you own. Suited to owner-occupiers who want long-term control of where they trade."
          },
          {
            "title": "Refinancing",
            "desc": "Move an existing mortgage or facility onto terms that better fit where your business is now, whether you are freeing up cash or consolidating borrowing."
          },
          {
            "title": "Property investment",
            "desc": "Finance commercial units to let, from a single shop or office to a small portfolio, with funding structured around the rental income."
          },
          {
            "title": "Development & refurbishment",
            "desc": "Fund building work, conversion or significant refurbishment of a commercial site, with finance arranged to match the stages of the project."
          }
        ]
      },
      {
        "kind": "list",
        "heading": "How Vastus helps",
        "items": [
          "A plain-English conversation about what you want the property to do for the business",
          "An honest view on whether a commercial mortgage is the right route, or another option fits better",
          "Help pulling together the figures and paperwork lenders ask to see",
          "Introductions to lenders whose appetite suits your sector and situation",
          "Support for owner-occupier, investment and development cases",
          "A single point of contact who stays with you through the process",
          "No pressure to proceed, and no obligation to take an offer forward"
        ]
      },
      {
        "kind": "faq",
        "heading": "Common questions",
        "items": [
          {
            "q": "How much can I borrow?",
            "a": "That depends on the property, your deposit or equity, the strength of the business and the lender's view. We will talk it through and give you a realistic picture before anything is submitted."
          },
          {
            "q": "Can I get a commercial mortgage to refinance?",
            "a": "Yes. Refinancing is a common reason to arrange one, whether you are moving to better terms, releasing equity or tidying up existing borrowing. We will look at whether it stacks up for you."
          },
          {
            "q": "What will it cost?",
            "a": "Rates and terms vary by lender and by your circumstances, so we do not quote figures upfront. We work to find competitive terms and explain the costs clearly before you commit."
          },
          {
            "q": "Is funding guaranteed?",
            "a": "No commercial mortgage is guaranteed. All lending is subject to status and the lender's assessment. Our role is to present your case well and connect you with lenders most likely to support it."
          }
        ]
      }
    ]
  },
  "development-finance": {
    "description": "Short-term funding built around the stages of a build — drawn down as work progresses, repaid on sale or refinance, with terms shaped to your project.",
    "features": [
      "Staged drawdowns",
      "Ground-up or refurb",
      "Funding subject to status",
      "Plain-English guidance"
    ],
    "sections": [
      {
        "kind": "prose",
        "eyebrow": "Overview",
        "heading": "Funding that follows the build",
        "body": "Development finance is short-term funding designed for property and construction projects, from ground-up builds to conversions and heavy refurbishments. Rather than a single lump sum, funds are typically released in stages as the project progresses, then repaid once the scheme is sold or refinanced. Vastus listens to what you are building, then introduces you to lenders whose criteria fit the project — so the funding works with your programme, not against it."
      },
      {
        "kind": "cards",
        "heading": "What it is good for",
        "items": [
          {
            "title": "Ground-up development",
            "desc": "Funding to take a site from land or shell through to a completed, sellable or lettable scheme."
          },
          {
            "title": "Refurbishment and conversion",
            "desc": "Capital to fund renovations, change of use or splitting a building into multiple units."
          },
          {
            "title": "Land with planning",
            "desc": "Support for purchasing and developing sites where planning is in place or progressing."
          },
          {
            "title": "Bridging the exit",
            "desc": "Short-term cover that gives you time to sell completed units or arrange longer-term refinance."
          }
        ]
      },
      {
        "kind": "list",
        "heading": "How working with Vastus helps",
        "items": [
          "We take time to understand the site, the scheme and your build programme",
          "We match you to lenders whose appetite suits the project type and stage",
          "We help present your numbers, costs and exit clearly so applications land well",
          "Funding can be structured around staged drawdowns as work is signed off",
          "We keep the language plain — no jargon, no pressure to commit",
          "Suitable for first-time developers and experienced builders alike",
          "Terms reflect the project, your experience and the exit, subject to status",
          "One point of contact who stays with you from enquiry through to drawdown"
        ]
      },
      {
        "kind": "faq",
        "heading": "Common questions",
        "items": [
          {
            "q": "How is development finance usually repaid?",
            "a": "It is short-term by nature and typically repaid when the finished scheme is sold or refinanced onto a longer-term facility. We will talk through the exit with you before anything is arranged."
          },
          {
            "q": "Do I need to be an experienced developer?",
            "a": "Not always. Some lenders work with first-time developers, while others prefer a track record. We point you toward the options that fit your situation, all subject to status."
          },
          {
            "q": "How are the funds released?",
            "a": "Development funding is commonly drawn down in stages as the build hits agreed milestones, rather than paid out in full at the start. The exact structure depends on the lender and the project."
          },
          {
            "q": "What does Vastus actually do?",
            "a": "We are an introducer. We get to know your project, match it to suitable lenders and help you present a strong application — so you spend less time chasing the wrong doors."
          }
        ]
      }
    ]
  },
  "gas-electricity": {
    "description": "We compare the business energy market, handle the switch end to end and manage your account through to renewal — so you can stop overpaying without the hassle.",
    "features": [
      "Whole-of-market comparison",
      "Switch handled for you",
      "Fixed & flexible tariffs",
      "Ongoing account management"
    ],
    "sections": [
      {
        "kind": "prose",
        "eyebrow": "Overview",
        "heading": "Business energy, compared and handled",
        "body": "Sorting business gas and electricity is rarely simple — contracts roll over, rates creep up and chasing quotes eats into your day. Vastus compares the market on your behalf, finds a tariff that suits how your business actually uses energy, and manages the switch from start to finish so you don't have to."
      },
      {
        "kind": "cards",
        "eyebrow": "How it works",
        "heading": "From quote to switch",
        "items": [
          {
            "title": "We compare the market",
            "desc": "Share your current usage and contract dates and we'll gather competitive quotes across business gas and electricity suppliers, so you can see your options side by side."
          },
          {
            "title": "We handle the switch",
            "desc": "Once you've chosen, we manage the paperwork and supplier liaison end to end. There's no interruption to your supply — only the rate and the billing change."
          },
          {
            "title": "We manage the account",
            "desc": "We keep an eye on your renewal dates and review the market again before your contract ends, so you're never rolled onto expensive out-of-contract rates."
          }
        ]
      },
      {
        "kind": "cards",
        "eyebrow": "Why Vastus",
        "heading": "A simpler way to buy energy",
        "items": [
          {
            "title": "Save time",
            "desc": "One conversation instead of dozens of supplier calls. We do the comparing and chasing while you get on with running your business."
          },
          {
            "title": "Competitive rates",
            "desc": "We look across the market to find pricing that reflects your consumption — single sites or multi-site portfolios."
          },
          {
            "title": "Fixed or flexible",
            "desc": "Lock in a fixed rate for budgeting certainty, or opt for a flexible contract that suits how your usage changes through the year."
          },
          {
            "title": "One point of contact",
            "desc": "A dedicated account manager who knows your business and handles queries, meter changes and renewals on your behalf."
          }
        ]
      },
      {
        "kind": "faq",
        "eyebrow": "Common questions",
        "heading": "What to expect",
        "items": [
          {
            "q": "Will my supply be interrupted when I switch?",
            "a": "No. The gas and electricity reaching your premises stay exactly the same — the only things that change are your supplier, your rate and who sends your bill. There's no physical work and no downtime."
          },
          {
            "q": "When is the best time to switch?",
            "a": "It depends on your current contract. Many business energy contracts can be agreed ahead of your renewal date to secure a rate, so it's worth talking to us well before your existing deal ends — we'll flag the right window for you."
          },
          {
            "q": "Do you only quote one supplier?",
            "a": "No. We compare across a range of business energy suppliers and present the options, so the choice is yours. Pricing depends on your usage, location and contract length and is subject to supplier terms."
          },
          {
            "q": "What do you need from me to get started?",
            "a": "A recent bill is usually enough to begin — it shows your usage, current rates and renewal date. From there we can gather quotes and talk you through what suits your business."
          }
        ]
      }
    ]
  },
  "business-waste": {
    "description": "We compare waste and recycling providers, arrange the right collections for your trade, and handle the switch so your bins are sorted and your paperwork is in order.",
    "features": [
      "Compliant duty of care",
      "Right collection schedule",
      "Better waste rates",
      "Hassle-free switching"
    ],
    "sections": [
      {
        "kind": "prose",
        "eyebrow": "Overview",
        "heading": "Waste collection without the guesswork",
        "body": "Business waste is one of those costs that quietly creeps up — overflowing bins, the wrong collection days, or a contract that rolled over on terms you never agreed to. Vastus compares the market for general waste, mixed recycling, food and trade-specific streams, then arranges collections that match how and when you actually produce waste."
      },
      {
        "kind": "cards",
        "heading": "Why businesses switch with us",
        "items": [
          {
            "title": "Compare the market",
            "desc": "We review providers and collection options across general, recycling and specialist streams, so you can see how your current arrangement stacks up before you commit to anything."
          },
          {
            "title": "The right collection",
            "desc": "We size the bins and set the frequency to your trade and premises — no paying for half-empty lifts, no overflowing yards on your busiest days."
          },
          {
            "title": "We handle the switch",
            "desc": "From quotes and notice periods to swapping the bins over, we manage the changeover and keep you covered so collections never lapse."
          },
          {
            "title": "Compliance handled",
            "desc": "We make sure your waste transfer notes and duty of care paperwork are in place, with licensed carriers and proper disposal you can evidence."
          }
        ]
      },
      {
        "kind": "list",
        "heading": "What we can arrange",
        "items": [
          "General and commercial waste collection",
          "Mixed and segregated dry recycling",
          "Food and organic waste collections",
          "Glass, cardboard and confidential waste streams",
          "Bin sizing and collection scheduling around your premises",
          "Duty of care documentation and waste transfer notes",
          "Licensed, compliant carriers and disposal",
          "One point of contact for the whole account"
        ]
      },
      {
        "kind": "faq",
        "heading": "Common questions",
        "items": [
          {
            "q": "Will switching disrupt my collections?",
            "a": "No. We line up the new service before anything changes and time the handover so your bins are emptied without a gap. You carry on trading while we manage the move."
          },
          {
            "q": "Am I tied into my current waste contract?",
            "a": "Many waste agreements roll over automatically and have notice windows. We check your terms, flag any renewal dates and handle the notice on your behalf where we can."
          },
          {
            "q": "Do you handle the compliance side?",
            "a": "Yes. We arrange licensed carriers and make sure your waste transfer notes and duty of care records are in order, so you can evidence proper disposal if you're ever asked."
          },
          {
            "q": "What happens after I've switched?",
            "a": "We stay on the account. If your needs change, collections are missed, or it's time to review pricing again, you have one point of contact at Vastus rather than a call centre."
          }
        ]
      }
    ]
  },
  "water": {
    "description": "We compare the business water market, handle the switch end to end and manage your account afterwards — so you pay less and barely lift a finger.",
    "features": [
      "Whole-of-market comparison",
      "Switch handled for you",
      "Ongoing account management",
      "Consolidated billing"
    ],
    "sections": [
      {
        "kind": "prose",
        "eyebrow": "Overview",
        "heading": "A better deal on business water",
        "body": "Since the water market opened up, businesses are free to choose their retailer rather than stay with the regional supplier they inherited. Most never switch, and quietly overpay for years. Vastus compares the market on your behalf, finds a supplier and tariff that suit how you actually use water, and manages the move so your day-to-day never skips a beat."
      },
      {
        "kind": "cards",
        "eyebrow": "What we do",
        "heading": "From comparison to switch",
        "items": [
          {
            "title": "Compare the market",
            "desc": "We review your current bills and usage, then compare business water retailers to find the right fit on price and service."
          },
          {
            "title": "Handle the switch",
            "desc": "We take care of the paperwork and supplier liaison from start to finish — your supply carries on uninterrupted throughout."
          },
          {
            "title": "Tidy up your billing",
            "desc": "Multiple sites or muddled invoices? We consolidate accounts where we can, so you get clear, predictable billing."
          },
          {
            "title": "Manage it ongoing",
            "desc": "A dedicated point of contact stays on hand for queries, meter reads, account changes and your next renewal."
          }
        ]
      },
      {
        "kind": "faq",
        "eyebrow": "Common questions",
        "heading": "Switching, answered",
        "items": [
          {
            "q": "Will switching disrupt my water supply?",
            "a": "No. Switching retailer changes who bills and services your account, not the water itself — the same pipes and supply continue exactly as before, with no interruption."
          },
          {
            "q": "Can any business switch water supplier?",
            "a": "Eligible businesses across England and Scotland can choose their water retailer. We'll confirm your eligibility when we review your current account and usage."
          },
          {
            "q": "How much will I save?",
            "a": "It depends on your usage, location and current tariff, so we won't quote a figure blind. We compare the market against your actual bills and only recommend a switch if it genuinely works out better for you."
          },
          {
            "q": "What does Vastus charge for this?",
            "a": "Tell us what you'd like to achieve and we'll set out the arrangement clearly before anything goes ahead — no obligation to switch after a comparison."
          }
        ]
      }
    ]
  },
  "telecoms": {
    "description": "We compare business mobile and landline deals across the market, then handle the switch and manage the account so your lines just work.",
    "features": [
      "Whole-of-market comparison",
      "Mobile & landline",
      "Hassle-free switching",
      "Ongoing account support"
    ],
    "sections": [
      {
        "kind": "prose",
        "eyebrow": "Overview",
        "heading": "Business telecoms, sorted",
        "body": "Business mobile and landline contracts are easy to overpay on and a chore to change. Vastus compares plans across the market against how your team actually calls, texts and travels, then puts a deal in front of you that fits. We handle the paperwork and the move so there's nothing for you to chase."
      },
      {
        "kind": "cards",
        "heading": "What we look after",
        "items": [
          {
            "title": "Business mobile",
            "desc": "Single SIMs through to multi-handset fleets, with shared data, generous allowances and roaming sorted for teams who work on the move."
          },
          {
            "title": "Landline & calls",
            "desc": "Traditional lines or VoIP and hosted phone systems, with call plans matched to how often you're actually on the phone."
          },
          {
            "title": "The switch",
            "desc": "We coordinate number porting and the changeover with your new and outgoing providers so lines stay live and nothing drops."
          },
          {
            "title": "Account management",
            "desc": "One point of contact for upgrades, add-ons, billing queries and a fresh review when your contract comes up for renewal."
          }
        ]
      },
      {
        "kind": "list",
        "heading": "How Vastus helps",
        "items": [
          "Review your current mobile and landline spend and usage",
          "Compare suitable plans from across the market",
          "Match allowances, data and call bundles to your team",
          "Recommend mobile, landline, VoIP or a blend",
          "Handle number porting and the provider handover",
          "Coordinate timings so there's no downtime",
          "Sort upgrades and new connections as you grow",
          "Flag renewals before you roll onto out-of-contract rates"
        ]
      },
      {
        "kind": "faq",
        "heading": "Common questions",
        "items": [
          {
            "q": "Do I have to change my phone number?",
            "a": "No. Existing mobile and landline numbers can be ported to your new plan as part of the switch, so customers and contacts reach you exactly as before."
          },
          {
            "q": "Can you cover mobile and landline together?",
            "a": "Yes. We can review both sides of your telecoms and put forward plans for mobiles, landlines, VoIP or a combination, depending on what suits the business."
          },
          {
            "q": "What happens when my current contract is up?",
            "a": "We keep an eye on your renewal date and come back to you before it lands, so you can compare again rather than drift onto more expensive out-of-contract rates."
          },
          {
            "q": "Is there much for us to do?",
            "a": "Very little. We do the comparing and liaise with the providers to arrange the changeover. You confirm the plan you're happy with and we manage the rest, subject to status and provider checks."
          }
        ]
      }
    ]
  },
  "broadband": {
    "description": "We compare business broadband across the market, handle the switch, and keep your connection working — so your card payments, calls and cloud tools never miss a beat.",
    "features": [
      "Whole-of-market comparison",
      "Hassle-free switching",
      "Ongoing account management",
      "UK-based support"
    ],
    "sections": [
      {
        "kind": "prose",
        "eyebrow": "Overview",
        "heading": "Business broadband, sorted",
        "body": "A slow or unreliable connection costs you sales, calls and patience. Vastus compares business broadband across a range of suppliers and connection types, then handles the switch end to end. You tell us how you trade and where, and we find a plan that keeps your tills, terminals and team online."
      },
      {
        "kind": "cards",
        "heading": "Why switch your broadband with Vastus",
        "items": [
          {
            "title": "One comparison, less legwork",
            "desc": "We do the shopping around for you — comparing packages, contract terms and connection types so you can choose with confidence rather than wading through tariffs."
          },
          {
            "title": "We handle the switch",
            "desc": "From quote to go-live, we coordinate the changeover and the paperwork, working to minimise disruption so you stay connected through the move."
          },
          {
            "title": "Right connection for the site",
            "desc": "Single shop, busy office or multi-site operation — we match the line and speed to how you actually use your connection, not a one-size-fits-all package."
          },
          {
            "title": "Managed beyond go-live",
            "desc": "When your contract nears renewal we review the market again, so you don't quietly roll onto out-of-contract rates."
          }
        ]
      },
      {
        "kind": "list",
        "heading": "What we look after",
        "items": [
          "Whole-of-market comparison across business broadband suppliers",
          "Matching connection type to your premises and usage",
          "Plans for single sites and multi-site operations",
          "Coordinating the switch and provisioning with your provider",
          "Aligning broadband with phone, card payment and cloud needs",
          "Reviewing contracts ahead of renewal",
          "A single point of contact for queries and account changes",
          "UK-based support throughout"
        ]
      },
      {
        "kind": "faq",
        "heading": "Common questions",
        "items": [
          {
            "q": "Will switching broadband interrupt my business?",
            "a": "We plan the changeover around your trading and coordinate provisioning with the supplier to keep any downtime to a minimum. We'll talk you through what to expect before anything changes."
          },
          {
            "q": "Do you only compare one supplier?",
            "a": "No. We compare business broadband across a range of suppliers and connection types, then recommend the option that best fits how and where you trade."
          },
          {
            "q": "What if I'm still in contract?",
            "a": "We'll review your current agreement and renewal date, and line up the next switch so you move at the right time rather than drifting onto out-of-contract rates."
          },
          {
            "q": "Can you sort broadband alongside our phones and card machines?",
            "a": "Yes. Broadband sits alongside our telecoms, VoIP and payment services, so we can look at your connectivity as a whole and keep everything working together."
          }
        ]
      }
    ]
  },
  "voip-phone-systems": {
    "description": "Cloud-based business phone systems with the numbers, handsets and call features your team needs — compared across the market and switched without the hassle.",
    "features": [
      "Whole-of-market comparison",
      "Keep your number",
      "Managed switch",
      "Ongoing account support"
    ],
    "sections": [
      {
        "kind": "prose",
        "eyebrow": "Overview",
        "heading": "Phone systems that fit how you work",
        "body": "VoIP replaces traditional phone lines with calls carried over your internet connection, so your business can take calls on desk handsets, laptops and mobiles from one system. Vastus compares providers on your behalf, finds a package that suits the way your team handles calls, and manages the move from start to finish."
      },
      {
        "kind": "cards",
        "heading": "Why switch with Vastus",
        "items": [
          {
            "title": "We compare the market",
            "desc": "Rather than ringing round providers yourself, you give us your call patterns and requirements once. We do the legwork and bring back options that genuinely fit."
          },
          {
            "title": "Keep your existing numbers",
            "desc": "Porting your current numbers across is a standard part of the move, so customers keep reaching you on the lines they already know."
          },
          {
            "title": "A switch handled for you",
            "desc": "We coordinate setup, number porting and go-live with the provider, keeping disruption to your day-to-day calls to a minimum."
          },
          {
            "title": "Support that stays put",
            "desc": "Once you're live we remain your point of contact — for adding users, reviewing the package as you grow, or sorting issues with the provider."
          }
        ]
      },
      {
        "kind": "list",
        "heading": "What a modern system can do",
        "items": [
          "Call answering on desk phones, computers and mobile apps",
          "Add or remove users as your team changes size",
          "Call routing, hunt groups and out-of-hours handling",
          "Voicemail-to-email and call recording where you need it",
          "Hold music, auto-attendant and professional greetings",
          "Video calling and team messaging in the same platform",
          "Reporting on call volumes and missed calls",
          "Easy moves between offices, sites or remote working"
        ]
      },
      {
        "kind": "faq",
        "heading": "Common questions",
        "items": [
          {
            "q": "Will I need new hardware?",
            "a": "It depends on the system you choose. Many businesses run VoIP on existing computers and mobiles via an app, while others prefer dedicated handsets. We'll talk through what suits you before recommending anything."
          },
          {
            "q": "Can I keep my current phone number?",
            "a": "In most cases, yes. Porting existing numbers to the new system is a normal part of the switch, and we handle the process with the provider for you."
          },
          {
            "q": "What happens to my service during the move?",
            "a": "We plan the switch to keep your phones working throughout and time the go-live to cause as little disruption as possible to incoming calls."
          },
          {
            "q": "Is VoIP suitable for a small team?",
            "a": "Yes. Cloud phone systems scale from a single user upwards, so you only pay for what you use and can add lines as the business grows."
          }
        ]
      }
    ]
  },
  "website-development": {
    "description": "Custom-built websites that load fast, rank well and turn visitors into customers — designed, developed and supported by Vastus from brief to launch.",
    "features": [
      "Fast-loading pages",
      "Mobile-first design",
      "Built for SEO",
      "Conversion-focused"
    ],
    "sections": [
      {
        "kind": "prose",
        "eyebrow": "Overview",
        "heading": "Websites built to perform",
        "body": "Your website is often the first thing a customer sees, so it needs to load quickly, look right on every device and guide people towards getting in touch or buying. Vastus designs and builds bespoke sites on modern frameworks — no off-the-shelf templates — tailored to how your business actually works and the customers you want to reach."
      },
      {
        "kind": "cards",
        "heading": "What we build",
        "items": [
          {
            "title": "Marketing & brochure sites",
            "desc": "Clear, persuasive sites that present what you do, build trust and make it easy for visitors to take the next step."
          },
          {
            "title": "E-commerce stores",
            "desc": "Online shops with smooth product browsing, secure checkout and the integrations you need to sell and fulfil with confidence."
          },
          {
            "title": "Web apps & portals",
            "desc": "Customer logins, booking systems, dashboards and bespoke tools built around your processes rather than forcing you to change them."
          },
          {
            "title": "Redesigns & rebuilds",
            "desc": "Modernising a dated or slow site — keeping what works, fixing what doesn't and rebuilding it on solid, maintainable foundations."
          }
        ]
      },
      {
        "kind": "list",
        "heading": "What's included as standard",
        "items": [
          "Responsive design that works on phones, tablets and desktops",
          "Performance optimisation for fast load times and smooth interaction",
          "Search-engine-friendly structure, clean markup and metadata",
          "Accessibility considered from the start, not bolted on afterwards",
          "Secure hosting and SSL set up and configured for you",
          "An easy-to-use content management system so you can make edits yourself",
          "Analytics and tracking so you can see how the site is performing",
          "Ongoing support and maintenance once you're live"
        ]
      },
      {
        "kind": "faq",
        "heading": "Common questions",
        "items": [
          {
            "q": "Will I be able to update the site myself?",
            "a": "Yes. We build on content management systems that let you edit text, images and pages without touching code, and we'll show your team how to use it."
          },
          {
            "q": "Can you redesign my existing website?",
            "a": "Absolutely. We can refresh the design, rebuild it on modern foundations or migrate your content to a faster, more maintainable platform — keeping the parts that already work for you."
          },
          {
            "q": "Do you handle hosting and domains?",
            "a": "We do. Vastus can set up secure hosting, configure your domain and SSL, and keep everything running, or work alongside an existing provider if you prefer."
          },
          {
            "q": "What happens after the site goes live?",
            "a": "Launch is the start, not the end. We offer ongoing support, maintenance and improvements so your site stays secure, up to date and aligned with your goals as your business grows."
          }
        ]
      }
    ]
  },
  "mobile-app-development": {
    "description": "We design and build mobile apps that feel at home on every device — fast, reliable and shaped around the way your customers and team actually work.",
    "features": [
      "iOS & Android",
      "Native or cross-platform",
      "App Store submission",
      "Ongoing support"
    ],
    "sections": [
      {
        "kind": "prose",
        "eyebrow": "Overview",
        "heading": "Mobile apps, built properly",
        "body": "At Vastus, we build mobile apps that people genuinely want to use. Whether you need a customer-facing app, an internal tool for your team or a companion to an existing platform, we take you from idea to a polished product on both iOS and Android — designing around your users, your brand and the way your business actually works."
      },
      {
        "kind": "cards",
        "eyebrow": "What we build",
        "heading": "From idea to App Store",
        "items": [
          {
            "title": "Native apps",
            "desc": "Built specifically for iOS or Android to make the most of each platform — fast, responsive and at home on the device."
          },
          {
            "title": "Cross-platform apps",
            "desc": "One shared codebase that runs on iOS and Android, helping you reach both audiences and keep build and maintenance costs down."
          },
          {
            "title": "Connected to your systems",
            "desc": "Apps that talk to your existing tools, payment providers and back office, so data flows cleanly rather than living in silos."
          },
          {
            "title": "Designed for real use",
            "desc": "Clean, intuitive interfaces shaped around your users, with accessibility and performance considered from the first screen."
          }
        ]
      },
      {
        "kind": "list",
        "eyebrow": "Capabilities",
        "heading": "What we handle for you",
        "items": [
          "Discovery, scoping and user-journey mapping",
          "UI and UX design tailored to your brand",
          "Native iOS and Android development",
          "Cross-platform builds from a single codebase",
          "Secure APIs and back-end integration",
          "Push notifications and in-app messaging",
          "App Store and Google Play submission",
          "Testing, maintenance and ongoing support"
        ]
      },
      {
        "kind": "faq",
        "eyebrow": "Common questions",
        "heading": "Questions we hear often",
        "items": [
          {
            "q": "Should I choose native or cross-platform?",
            "a": "It depends on your goals. Native suits apps that need the very best performance or deep device features, while cross-platform is a cost-effective way to launch on iOS and Android together. We'll talk it through and recommend the right fit for your project."
          },
          {
            "q": "Will you submit the app to the App Store and Google Play?",
            "a": "Yes. We prepare the listings, handle the submission process and work through any review feedback, so your app reaches both stores without the headache."
          },
          {
            "q": "Can you build on top of an existing system?",
            "a": "Absolutely. We regularly connect apps to existing websites, databases, payment platforms and back-office tools so everything works together rather than in isolation."
          },
          {
            "q": "What happens after launch?",
            "a": "Launch is the beginning, not the end. We offer ongoing support, updates and improvements to keep your app secure, compatible with new devices and evolving alongside your business."
          }
        ]
      }
    ]
  },
  "software-development": {
    "description": "Bespoke software built around the way you actually work — connecting your tools, automating the manual jobs and giving your team systems that scale with the business.",
    "features": [
      "Built around your process",
      "Systems that talk to each other",
      "Automate manual tasks",
      "Scales as you grow"
    ],
    "sections": [
      {
        "kind": "prose",
        "eyebrow": "Overview",
        "heading": "Software built around your business",
        "body": "Off-the-shelf tools rarely fit the way a business actually runs, leaving teams to bridge the gaps with spreadsheets and manual work. At Vastus we design and build custom software around your real processes — web applications, internal tools, integrations and automation — so your systems work the way you do, not the other way around."
      },
      {
        "kind": "cards",
        "eyebrow": "What we build",
        "heading": "From idea to working software",
        "items": [
          {
            "title": "Bespoke applications",
            "desc": "Web and internal applications built for your workflows, replacing the spreadsheets and disconnected tools your team has outgrown."
          },
          {
            "title": "Integrations",
            "desc": "Connect the platforms you already use — your CRM, accounting, payments and EPOS — so data moves between them automatically instead of by hand."
          },
          {
            "title": "Process automation",
            "desc": "Take the repetitive, manual jobs off your team and let software handle them, reducing errors and freeing up time for the work that matters."
          },
          {
            "title": "Dashboards and reporting",
            "desc": "Pull your operational data into clear, live dashboards so you can see what is happening and make decisions with confidence."
          }
        ]
      },
      {
        "kind": "list",
        "eyebrow": "Capabilities",
        "heading": "What we can deliver",
        "items": [
          "Custom web and cloud applications",
          "Internal tools and admin portals",
          "API design and third-party integrations",
          "Workflow and process automation",
          "Database design and data migration",
          "Legacy system modernisation",
          "Ongoing support, maintenance and improvements",
          "Secure, scalable cloud hosting"
        ]
      },
      {
        "kind": "prose",
        "eyebrow": "How we work",
        "heading": "A clear, collaborative process",
        "body": "We start by understanding how your business operates and where the friction is, then scope and design a solution before a line of code is written. Built in stages with regular check-ins, you see progress as it happens and can shape the result along the way — and once it is live, we are on hand to support, maintain and keep improving it."
      }
    ]
  },
  "ai-solutions": {
    "description": "Practical AI built around your business — assistants that answer questions, models that surface insight, and automations that handle the repetitive work behind the scenes.",
    "features": [
      "Custom AI assistants",
      "Insight from your data",
      "Smart automation",
      "Built around you"
    ],
    "sections": [
      {
        "kind": "prose",
        "eyebrow": "Overview",
        "heading": "AI that fits how you work",
        "body": "AI only earns its place when it solves a real problem in your business, not when it is bolted on for the sake of it. We start with the work you actually do — the questions your team keeps answering, the data sitting unused, the tasks that eat hours — and build AI around it. From assistants that handle enquiries to models that read your own information and turn it into useful answers, everything is shaped to your processes and your tools."
      },
      {
        "kind": "cards",
        "eyebrow": "Use cases",
        "heading": "What AI can do for your business",
        "items": [
          {
            "title": "Customer assistants",
            "desc": "Chat and voice assistants that answer common questions, qualify enquiries and point people to the right place — day and night, in your tone of voice."
          },
          {
            "title": "Insight from your data",
            "desc": "Models that read your documents, records and reports so your team can ask plain-English questions and get useful answers instead of digging through files."
          },
          {
            "title": "Smart automation",
            "desc": "Let AI handle the repetitive work — sorting messages, drafting replies, summarising long documents and flagging what needs a human eye."
          },
          {
            "title": "Content and admin support",
            "desc": "Speed up the everyday writing, tagging and data-entry tasks that slow your team down, with a person always kept in the loop."
          }
        ]
      },
      {
        "kind": "cards",
        "eyebrow": "Our approach",
        "heading": "How we build it",
        "items": [
          {
            "title": "Start with the problem",
            "desc": "We look at where AI will genuinely save time or win work, then scope something practical — no jargon, no over-engineering."
          },
          {
            "title": "Trained on your world",
            "desc": "We connect AI to your own content and systems so its answers reflect your business, not generic information pulled from the internet."
          },
          {
            "title": "You stay in control",
            "desc": "Clear guardrails, human review where it matters and full visibility of what the AI is doing — so you can trust it with real work."
          },
          {
            "title": "Built to grow",
            "desc": "We start small, prove the value, then extend it across your team as confidence builds and the wins add up."
          }
        ]
      },
      {
        "kind": "faq",
        "eyebrow": "Common questions",
        "heading": "AI, without the guesswork",
        "items": [
          {
            "q": "Do I need to be technical to use this?",
            "a": "No. We handle the build and the heavy lifting, then hand you something your team can use through the tools and interfaces they already know. Training and support are part of the service."
          },
          {
            "q": "Will the AI use my own business information?",
            "a": "Yes, where you want it to. We can connect AI securely to your own documents and systems so its answers are grounded in your business, rather than generic web content."
          },
          {
            "q": "What about accuracy and control?",
            "a": "We design every solution with sensible limits and human review on anything that matters, so AI supports your team rather than making unchecked decisions on its own."
          },
          {
            "q": "How do we get started?",
            "a": "We begin with a conversation about where AI could help most, then scope a focused first project. Starting small lets you see the value quickly before extending it further."
          }
        ]
      }
    ]
  },
  "automation-solutions": {
    "description": "We connect your tools, automate the repetitive work and let your team focus on what actually moves the business forward.",
    "features": [
      "Connect your tools",
      "Cut manual data entry",
      "Fewer human errors",
      "Scales as you grow"
    ],
    "sections": [
      {
        "kind": "prose",
        "eyebrow": "Overview",
        "heading": "Automation that fits how you work",
        "body": "Most teams lose hours to the same tasks every week — copying data between systems, chasing approvals, re-keying orders and stitching together spreadsheets. Vastus maps those workflows, then builds automations that run them quietly in the background, so your people spend their time on the work only they can do."
      },
      {
        "kind": "cards",
        "heading": "Where automation helps most",
        "items": [
          {
            "title": "Data and admin",
            "desc": "Move information between your apps automatically — no more copying figures from one system into another, or re-typing the same details twice."
          },
          {
            "title": "Approvals and handoffs",
            "desc": "Route requests to the right person, send reminders and progress work through each stage without anyone having to chase it along."
          },
          {
            "title": "Reporting",
            "desc": "Pull numbers together from across your tools into clear, up-to-date reports, ready when you need them rather than built by hand each week."
          },
          {
            "title": "Customer touchpoints",
            "desc": "Trigger confirmations, follow-ups and onboarding steps at the right moment, so nothing slips through and every customer gets a consistent experience."
          }
        ]
      },
      {
        "kind": "list",
        "heading": "What we can build",
        "items": [
          "Workflow automations linking the tools you already use",
          "Integrations and APIs between systems that don't talk to each other",
          "Automatic data syncing to keep records consistent everywhere",
          "Scheduled tasks and routine jobs that run without supervision",
          "Document and form handling, from capture through to filing",
          "Notifications and alerts so the right people are kept informed",
          "Dashboards that update themselves from live data"
        ]
      },
      {
        "kind": "faq",
        "heading": "Common questions",
        "items": [
          {
            "q": "Do we have to replace our existing software?",
            "a": "No. We work with the tools you already rely on wherever possible, connecting them together rather than asking you to start again from scratch."
          },
          {
            "q": "How do you decide what to automate first?",
            "a": "We start by understanding your current workflows and look for the tasks that are repetitive, time-consuming or prone to error — those usually deliver the clearest return."
          },
          {
            "q": "Will the automations be hard to manage?",
            "a": "We build with maintainability in mind and hand over clear documentation, so your team understands how everything works and can rely on it day to day."
          },
          {
            "q": "What if our needs change later?",
            "a": "Automations are built to adapt. As your processes evolve, they can be adjusted, extended or connected to new tools without starting over."
          }
        ]
      }
    ]
  },
  "crm-solutions": {
    "description": "A CRM built around how you actually work — every contact, deal and conversation in one place, so nothing slips and your team always knows what's next.",
    "features": [
      "Single customer view",
      "Visual sales pipeline",
      "Automated follow-ups",
      "Integrates with your tools"
    ],
    "sections": [
      {
        "kind": "prose",
        "eyebrow": "Overview",
        "heading": "One place for every customer relationship",
        "body": "A CRM brings your contacts, deals, emails and tasks together so your whole team works from the same record. Vastus builds and configures CRM systems around how your business actually operates — capturing leads, tracking every conversation and giving you a clear view of your pipeline from first enquiry to repeat custom."
      },
      {
        "kind": "cards",
        "eyebrow": "What it does",
        "heading": "Built around your day-to-day",
        "items": [
          {
            "title": "Single customer view",
            "desc": "Every contact, order, note and message in one record, so anyone on your team can pick up a relationship without losing context."
          },
          {
            "title": "Visual sales pipeline",
            "desc": "See every deal and its stage at a glance, spot what is stalling and forecast with confidence."
          },
          {
            "title": "Automated follow-ups",
            "desc": "Trigger reminders, tasks and emails automatically so leads are nurtured and nothing falls through the cracks."
          },
          {
            "title": "Reporting that informs decisions",
            "desc": "Dashboards on conversion, activity and revenue, built around the numbers your business actually runs on."
          }
        ]
      },
      {
        "kind": "list",
        "eyebrow": "Capabilities",
        "heading": "What we can set up for you",
        "items": [
          "Contact and company management with full activity history",
          "Customisable pipelines and stages that match your sales process",
          "Lead capture from your website, forms and inbox",
          "Email and calendar sync so conversations stay in context",
          "Task, reminder and workflow automation",
          "Quotes, invoicing and order tracking where you need it",
          "Integration with your payment, marketing and accounting tools",
          "Role-based access and permissions for your team",
          "Migration of your existing customer data, handled cleanly"
        ]
      },
      {
        "kind": "prose",
        "eyebrow": "Our approach",
        "heading": "Configured, adopted and supported",
        "body": "We start by understanding how your team works, then choose and configure the right platform rather than forcing you into a one-size-fits-all setup. We migrate your data, integrate the tools you already use and train your people so the CRM is actually adopted — backed by ongoing support from a UK team as your needs grow."
      }
    ]
  },
  "cyber-security": {
    "description": "Layered defences that protect your data, devices and people — from perimeter and email through to endpoints, backups and incident response.",
    "features": [
      "Threat monitoring",
      "Endpoint protection",
      "Secure backups",
      "Incident response"
    ],
    "sections": [
      {
        "kind": "prose",
        "eyebrow": "Overview",
        "heading": "Security built in layers",
        "body": "Modern threats rarely arrive through a single door, so we don't rely on a single defence. Vastus combines perimeter and email filtering, hardened devices, access controls and tested backups into one layered approach — closing the gaps attackers look for and keeping your business running if something does get through."
      },
      {
        "kind": "cards",
        "heading": "How we protect your business",
        "items": [
          {
            "title": "Perimeter and email",
            "desc": "Firewalls, DNS filtering and email security stop the most common entry points — phishing, malicious links and spoofed senders — before they reach your team."
          },
          {
            "title": "Endpoints and devices",
            "desc": "Laptops, desktops and mobiles are hardened, patched and protected with managed antivirus and threat detection, wherever your people work."
          },
          {
            "title": "Identity and access",
            "desc": "Multi-factor authentication, least-privilege permissions and single sign-on make sure the right people reach the right systems — and no one else."
          },
          {
            "title": "Backup and recovery",
            "desc": "Encrypted, tested backups mean that if the worst happens, your data and operations can be restored quickly rather than lost."
          }
        ]
      },
      {
        "kind": "list",
        "heading": "What we deliver",
        "items": [
          "Security assessments to find and prioritise your real risks",
          "Managed firewalls, DNS and email filtering",
          "Endpoint protection with monitoring and patch management",
          "Multi-factor authentication and identity management",
          "Encrypted, regularly tested backup and recovery",
          "Staff awareness training to reduce human error",
          "Ongoing monitoring with alerting on suspicious activity",
          "Incident response and recovery support when you need it"
        ]
      },
      {
        "kind": "faq",
        "heading": "Common questions",
        "items": [
          {
            "q": "Do you only work with large businesses?",
            "a": "No. We size protection to your business, whether you're a small team or a growing organisation, and scale it as you do."
          },
          {
            "q": "Will security slow my team down?",
            "a": "Good security should be largely invisible. We aim for protection that works quietly in the background, with sensible controls rather than constant friction."
          },
          {
            "q": "What happens if we're attacked?",
            "a": "We help you contain the incident, restore from tested backups and get back to trading, then review what happened so it's less likely to recur."
          },
          {
            "q": "Can you work alongside our existing IT?",
            "a": "Yes. We can complement an in-house team or existing provider, or take on security end to end — whichever suits how you operate."
          }
        ]
      }
    ]
  },
  "cloud-solutions": {
    "description": "Move your business to the cloud with confidence — Vastus plans the migration, hosts your systems and scales capacity up or down as you grow.",
    "features": [
      "Planned cloud migration",
      "Managed hosting",
      "Scales on demand",
      "Backup & recovery"
    ],
    "sections": [
      {
        "kind": "prose",
        "eyebrow": "Overview",
        "heading": "Built for the cloud, run by Vastus",
        "body": "Cloud infrastructure lets you run your applications, files and systems on managed servers rather than ageing hardware on site. Vastus assesses what you have today, plans the move and hosts it on a platform that flexes with demand — so you pay for the capacity you use and add more the moment you need it."
      },
      {
        "kind": "cards",
        "eyebrow": "What we deliver",
        "heading": "From first server to full migration",
        "items": [
          {
            "title": "Cloud migration",
            "desc": "We map your existing systems, applications and data, then move them across in a planned sequence designed to keep disruption to a minimum and your business trading throughout."
          },
          {
            "title": "Managed hosting",
            "desc": "Host your websites, applications and line-of-business systems on infrastructure we provision, monitor and maintain on your behalf — no rack of servers to look after."
          },
          {
            "title": "Backup & recovery",
            "desc": "Automated backups and a tested recovery plan, so if something fails your data is protected and your systems can be brought back up quickly."
          },
          {
            "title": "Scale on demand",
            "desc": "Add resource for a busy period and scale it back when things settle. Capacity follows your business rather than the other way round."
          }
        ]
      },
      {
        "kind": "list",
        "eyebrow": "Capabilities",
        "heading": "What cloud unlocks for your business",
        "items": [
          "Migrate from on-site servers to managed cloud infrastructure",
          "Public, private and hybrid cloud setups to suit how you work",
          "Host websites, applications and internal systems in one place",
          "Secure remote access for teams working from anywhere",
          "Scale capacity up or down without buying new hardware",
          "Automated backups with a tested disaster-recovery plan",
          "Ongoing monitoring, patching and maintenance handled for you",
          "Predictable costs that track the resource you actually use"
        ]
      },
      {
        "kind": "faq",
        "eyebrow": "Common questions",
        "heading": "Moving to the cloud, explained",
        "items": [
          {
            "q": "Will moving to the cloud disrupt our day-to-day operations?",
            "a": "We plan every migration in stages and schedule the work around your business, so the move happens with as little interruption as possible and your team keeps working throughout."
          },
          {
            "q": "Is our data secure in the cloud?",
            "a": "Your systems are hosted on reputable, secure infrastructure with access controls, encryption and automated backups in place. We can also align your setup with the wider security measures Vastus provides."
          },
          {
            "q": "What if our needs change after we migrate?",
            "a": "That is the point of the cloud. We can add storage, computing power or new services as you grow, and scale things back when demand drops, so you are never locked into capacity you do not need."
          },
          {
            "q": "Do we need our own IT team to run it?",
            "a": "No. Vastus can host, monitor and maintain your cloud environment for you, handling updates and day-to-day management, so you can focus on running the business."
          }
        ]
      }
    ]
  },
  "business-intelligence": {
    "description": "We bring your data together into clear dashboards and reports, so the numbers that run your business are always at your fingertips.",
    "features": [
      "Live dashboards",
      "Automated reporting",
      "All sources, one view",
      "Built around your KPIs"
    ],
    "sections": [
      {
        "kind": "prose",
        "eyebrow": "Overview",
        "heading": "From scattered data to clear decisions",
        "body": "Business intelligence brings the numbers from across your business into one place and turns them into something you can actually use. Vastus connects your systems, tidies the underlying data and builds dashboards and reports that show what is happening, why, and what to do next — without the manual spreadsheet work."
      },
      {
        "kind": "cards",
        "eyebrow": "What we build",
        "heading": "Dashboards built for the way you work",
        "items": [
          {
            "title": "Live dashboards",
            "desc": "Interactive views of sales, finance, operations or marketing that refresh on their own, so the picture is always current rather than a week out of date."
          },
          {
            "title": "Automated reporting",
            "desc": "Scheduled reports delivered to the right people at the right time, replacing the recurring grind of pulling figures together by hand each month."
          },
          {
            "title": "KPI tracking",
            "desc": "The handful of metrics that matter most for your business, tracked against targets and trends so progress is obvious at a glance."
          },
          {
            "title": "Self-serve analytics",
            "desc": "Filter, drill down and answer your own questions, giving the whole team access to the same trusted numbers without waiting on a report."
          }
        ]
      },
      {
        "kind": "list",
        "eyebrow": "Capabilities",
        "heading": "What we bring together",
        "items": [
          "Connect data from your CRM, accounting, ecommerce and operational tools",
          "Combine multiple sources into one consistent, reliable view",
          "Clean and structure your data so the figures can be trusted",
          "Design clear dashboards tailored to each team and audience",
          "Add alerts and thresholds that flag issues before they grow",
          "Build reports for mobile, desktop and the boardroom",
          "Set user access so people see what is relevant to their role",
          "Train your team to read, use and maintain their dashboards"
        ]
      },
      {
        "kind": "faq",
        "eyebrow": "Common questions",
        "heading": "How it works with Vastus",
        "items": [
          {
            "q": "Do we need to replace our current systems?",
            "a": "No. We work with the tools you already use and connect to them, so you keep your existing systems while gaining a single, joined-up view across them."
          },
          {
            "q": "What can we measure?",
            "a": "Anything you track — sales, cash flow, stock, marketing performance, productivity and more. We start with the decisions you want to make and work back to the metrics that support them."
          },
          {
            "q": "Who looks after it once it is live?",
            "a": "Dashboards refresh automatically, and we can hand over with training or stay on to support, refine and expand your reporting as your business grows."
          }
        ]
      }
    ]
  },
  "data-solutions": {
    "description": "We design the storage, pipelines and analytics that turn scattered, messy data into something your team can actually trust and act on.",
    "features": [
      "Reliable data pipelines",
      "Cloud or on-prem",
      "Dashboards that decide",
      "Built to scale"
    ],
    "sections": [
      {
        "kind": "prose",
        "eyebrow": "Overview",
        "heading": "Data, joined up and working for you",
        "body": "Most businesses already hold more data than they use — it just lives in disconnected tools, spreadsheets and systems that never talk to each other. Vastus brings it together. We design storage that fits your data, pipelines that keep it moving and clean, and analytics that surface the answers you actually need, so decisions are based on what is really happening rather than a best guess."
      },
      {
        "kind": "cards",
        "heading": "What we build",
        "items": [
          {
            "title": "Storage and warehousing",
            "desc": "A single, well-structured home for your data — cloud, on-premise or hybrid — modelled so it stays fast and consistent as volumes grow."
          },
          {
            "title": "Pipelines and integration",
            "desc": "Automated flows that pull data from your existing tools, clean and reconcile it, and keep everything in sync without manual exports or copy-paste."
          },
          {
            "title": "Analytics and dashboards",
            "desc": "Clear reporting and live dashboards built around the questions your team asks, so the numbers that matter are always one click away."
          },
          {
            "title": "Governance and quality",
            "desc": "Sensible controls for access, accuracy and retention — so the data people rely on is trustworthy, secure and handled responsibly."
          }
        ]
      },
      {
        "kind": "list",
        "heading": "Capabilities",
        "items": [
          "Data warehouse and lakehouse design",
          "ETL and ELT pipeline development",
          "System and API integrations",
          "Data cleansing and deduplication",
          "Self-serve dashboards and reporting",
          "Migration from legacy databases and spreadsheets",
          "Access controls and data governance",
          "Monitoring and alerting on pipeline health"
        ]
      },
      {
        "kind": "faq",
        "heading": "Common questions",
        "items": [
          {
            "q": "Do we have to move everything to the cloud?",
            "a": "No. We work with cloud, on-premise and hybrid setups, and recommend whatever suits your data, budget and existing systems rather than forcing a particular platform."
          },
          {
            "q": "Will this work with the tools we already use?",
            "a": "Yes. A large part of what we do is integration — connecting the systems, apps and spreadsheets you already rely on, so your data flows between them automatically."
          },
          {
            "q": "Our data is in a real mess. Is that a problem?",
            "a": "Not at all — it is the usual starting point. We map what you have, clean and reconcile it, and put structure in place so it stays tidy going forward."
          },
          {
            "q": "What happens after the build is live?",
            "a": "We can stay on to monitor pipeline health, extend reporting and scale things up as your needs grow, or hand over with documentation if you would rather run it in-house."
          }
        ]
      }
    ]
  },
  "it-support-managed-services": {
    "description": "Fully managed IT support that monitors, maintains and protects your systems around the clock — so problems are fixed before they reach your team.",
    "features": [
      "24/7 system monitoring",
      "UK-based helpdesk",
      "Cyber security included",
      "Scalable as you grow"
    ],
    "sections": [
      {
        "kind": "prose",
        "eyebrow": "Overview",
        "heading": "Managed IT, handled for you",
        "body": "Our managed service takes day-to-day IT off your plate. We monitor your devices, servers and networks in the background, patch and update them on a regular schedule, and step in the moment something looks wrong. When your team does need help, they reach a friendly UK support desk rather than a queue — and most issues are resolved remotely while you keep working."
      },
      {
        "kind": "cards",
        "heading": "What you get with Vastus",
        "items": [
          {
            "title": "Proactive monitoring",
            "desc": "We watch your systems continuously and act on warning signs before they become outages, so you spend less time waiting on broken kit."
          },
          {
            "title": "Responsive helpdesk",
            "desc": "A real UK team answers your calls and tickets, fixes the everyday problems quickly, and keeps you informed on anything that takes longer."
          },
          {
            "title": "Security built in",
            "desc": "Endpoint protection, patching, backups and sensible policies come as standard — not as an upsell — to keep your data and people safe."
          },
          {
            "title": "Strategic guidance",
            "desc": "Regular reviews of your IT, with clear advice on what to upgrade, retire or invest in next, aligned to where your business is heading."
          }
        ]
      },
      {
        "kind": "list",
        "heading": "What we look after",
        "items": [
          "Desktops, laptops and mobile devices",
          "Servers, networks and Wi-Fi",
          "Cloud platforms such as Microsoft 365 and Google Workspace",
          "Email, file storage and shared drives",
          "Backup, recovery and business continuity",
          "Antivirus, firewalls and endpoint protection",
          "Software updates and security patching",
          "User onboarding, offboarding and access control"
        ]
      },
      {
        "kind": "faq",
        "heading": "Common questions",
        "items": [
          {
            "q": "Do you support remote and hybrid teams?",
            "a": "Yes. We support staff wherever they work, securing and managing devices in the office, at home or on the move so everyone gets the same level of cover."
          },
          {
            "q": "Will you work alongside our existing IT person or team?",
            "a": "We can. Vastus often acts as a co-managed partner, taking on monitoring, security and out-of-hours cover while your internal team focuses on the work that matters most to them."
          },
          {
            "q": "What happens when something goes wrong?",
            "a": "You contact our helpdesk by phone or ticket and we get straight on it. Most issues are resolved remotely, and we keep you updated until everything is back to normal."
          },
          {
            "q": "Can the service grow with us?",
            "a": "Absolutely. We scale cover up or down as you add staff, open new sites or adopt new tools, so your IT support always matches the size and shape of your business."
          }
        ]
      }
    ]
  },
  "ecommerce-solutions": {
    "description": "We design, build and launch online stores that turn browsers into buyers — fast, secure storefronts you can run and grow without a developer on call.",
    "features": [
      "Conversion-focused storefronts",
      "Easy product management",
      "Secure checkout",
      "Built to scale"
    ],
    "sections": [
      {
        "kind": "prose",
        "eyebrow": "Overview",
        "heading": "Online stores built around your products",
        "body": "Vastus designs and builds ecommerce stores that look the part and are genuinely easy to run. We start with how your customers shop and how you want to manage the back office, then build a fast, mobile-first storefront with a clear catalogue, frictionless checkout and the integrations your business already relies on. Whether you're launching your first store or replatforming an outgrown one, we handle the build, the migration and the launch."
      },
      {
        "kind": "cards",
        "eyebrow": "What we build",
        "heading": "Everything your store needs to sell",
        "items": [
          {
            "title": "Storefront design",
            "desc": "A clean, mobile-first storefront with product pages, search and filtering designed to guide shoppers from browsing to buying."
          },
          {
            "title": "Checkout that converts",
            "desc": "A short, secure checkout with the card, wallet and alternative payment methods your customers expect — fewer steps, fewer abandoned baskets."
          },
          {
            "title": "Catalogue and stock",
            "desc": "Manage products, variants, pricing and stock from one dashboard, with bulk editing so updating the shop never becomes a chore."
          },
          {
            "title": "Integrations that fit",
            "desc": "Connect payments, shipping, accounting, email and analytics so orders flow straight into the tools you already use."
          }
        ]
      },
      {
        "kind": "list",
        "eyebrow": "Capabilities",
        "heading": "From build to growth",
        "items": [
          "New store builds and replatforming from existing sites",
          "Product and order data migration with no lost listings",
          "Self-serve product, pricing and promotion management",
          "Discount codes, bundles and gift cards",
          "Abandoned-basket recovery and email marketing tie-ins",
          "Shipping, click-and-collect and delivery options",
          "Built-in SEO structure to help you get found",
          "Reporting on sales, products and customers",
          "Ongoing support, hosting and improvements"
        ]
      },
      {
        "kind": "faq",
        "eyebrow": "Common questions",
        "heading": "What to expect",
        "items": [
          {
            "q": "Can you work with my existing platform?",
            "a": "Yes. We build on established ecommerce platforms and can extend or refine a store you already have, rather than forcing a rebuild from scratch where it isn't needed."
          },
          {
            "q": "Will I be able to manage the store myself?",
            "a": "That's the goal. We set up an admin you can run day to day — adding products, changing prices and processing orders — and walk your team through it before launch."
          },
          {
            "q": "Can you migrate my current products and orders?",
            "a": "We handle migration of your catalogue, customers and order history carefully so nothing is lost in the move to your new store."
          },
          {
            "q": "Is the store secure for taking payments?",
            "a": "Yes. We build with secure, compliant checkout and payment integrations so customer and card data are protected throughout."
          }
        ]
      }
    ]
  },
  "digital-marketing": {
    "description": "Search, paid media and content built to bring the right people to your business — and turn that attention into enquiries, bookings and sales.",
    "features": [
      "SEO that ranks",
      "Paid media management",
      "Content that converts",
      "Clear reporting"
    ],
    "sections": [
      {
        "kind": "prose",
        "eyebrow": "Overview",
        "heading": "Marketing that earns its place in the pipeline",
        "body": "Digital marketing is how your business gets found, gets remembered and gets chosen. We combine search engine optimisation, paid advertising and content to put you in front of people actively looking for what you do — then guide them from first click to genuine enquiry. Every channel is tied back to the outcomes that matter to you, not vanity metrics."
      },
      {
        "kind": "cards",
        "heading": "What we cover",
        "items": [
          {
            "title": "Search engine optimisation",
            "desc": "Technical fixes, on-page improvements and content built around the terms your customers actually search, so you climb the rankings and stay there."
          },
          {
            "title": "Paid media",
            "desc": "Google, Microsoft and paid social campaigns managed end to end — sharp targeting, tested creative and budgets spent where they return the most."
          },
          {
            "title": "Content and copy",
            "desc": "Landing pages, blogs and assets written to rank, read well and move readers towards an enquiry rather than just filling space."
          },
          {
            "title": "Tracking and reporting",
            "desc": "Proper conversion tracking and plain-English reporting, so you can see what each channel brings in and where the next pound is best spent."
          }
        ]
      },
      {
        "kind": "list",
        "heading": "How we work with you",
        "items": [
          "Audit your current presence and benchmark where you stand against competitors",
          "Agree the goals and the metrics we'll judge success against",
          "Fix the technical foundations before spending on traffic",
          "Build campaigns and content around buyer intent, not guesswork",
          "Test, measure and refine continually as results come in",
          "Report clearly on what's working, what isn't and what we're doing about it",
          "Scale the channels that prove their worth"
        ]
      },
      {
        "kind": "faq",
        "heading": "Common questions",
        "items": [
          {
            "q": "Do I need both SEO and paid media?",
            "a": "Not always. Paid media can bring enquiries quickly while SEO builds a lasting, lower-cost flow of traffic over time. We'll recommend the mix that fits your goals, market and timescale rather than selling you everything."
          },
          {
            "q": "How soon will I see results?",
            "a": "Paid campaigns can drive traffic and enquiries quickly once live. SEO and content compound over a longer period. We'll set realistic expectations for each channel from the outset and keep you updated as things move."
          },
          {
            "q": "Will I be able to see what's working?",
            "a": "Yes. We set up conversion tracking and report in straightforward language, so you always know which channels are generating enquiries and how your budget is performing."
          }
        ]
      }
    ]
  },
  "digital-transformation": {
    "description": "We map how your business actually runs, then rebuild it on modern software — joining up the tools, data and processes that hold you back.",
    "features": [
      "Process automation",
      "Joined-up systems",
      "Cloud migration",
      "UK-based delivery"
    ],
    "sections": [
      {
        "kind": "prose",
        "eyebrow": "Overview",
        "heading": "Bring the whole operation up to date",
        "body": "Digital transformation is the work of replacing manual, disconnected and ageing systems with software that genuinely fits how you work. Vastus starts by understanding your day-to-day operations, then designs and builds the platforms, integrations and automations that move you forward — without ripping everything out on day one."
      },
      {
        "kind": "cards",
        "eyebrow": "What we deliver",
        "heading": "Where transformation pays off",
        "items": [
          {
            "title": "Automate the manual",
            "desc": "Replace spreadsheets, re-keying and repetitive admin with workflows that run themselves, so your team spends time on the work that matters."
          },
          {
            "title": "Connect your systems",
            "desc": "Join up the tools you already use — CRM, finance, stock, scheduling — so data flows automatically instead of being copied between platforms."
          },
          {
            "title": "Move to the cloud",
            "desc": "Migrate ageing on-site software to secure, scalable cloud infrastructure your team can reach from anywhere, on any device."
          },
          {
            "title": "Build what's missing",
            "desc": "Where off-the-shelf software can't keep up, we design bespoke applications and dashboards built around your exact processes."
          }
        ]
      },
      {
        "kind": "list",
        "eyebrow": "Capabilities",
        "heading": "What we can take on",
        "items": [
          "Operational audits to map where time and data are being lost",
          "Workflow and process automation across teams",
          "System integrations and data migration",
          "Cloud migration and hosting setup",
          "Bespoke web apps, portals and internal tools",
          "Reporting dashboards that surface the numbers you act on",
          "Staff onboarding and documentation for new systems",
          "Ongoing support and iteration once you're live"
        ]
      },
      {
        "kind": "faq",
        "eyebrow": "Good to know",
        "heading": "Common questions",
        "items": [
          {
            "q": "Do we have to change everything at once?",
            "a": "No. We work in phases, prioritising the changes that relieve the most pressure first, so you see value early and your team isn't overwhelmed by a single switch-over."
          },
          {
            "q": "Will it work with the software we already use?",
            "a": "Usually, yes. Much of transformation is connecting and getting more out of the tools you've already invested in, rather than replacing them for the sake of it."
          },
          {
            "q": "What if our needs are unusual?",
            "a": "That's where bespoke work comes in. When existing products don't fit, we build to your requirements — designed around your processes rather than forcing you to bend to theirs."
          },
          {
            "q": "How do you keep things running during the change?",
            "a": "We plan migrations to minimise disruption, test thoroughly before go-live, and support your team through the transition with documentation and hands-on help."
          }
        ]
      }
    ]
  },
  "other-digital-services": {
    "description": "The supporting digital work that holds a business online — branding, domains, hosting, email, SEO and the everyday essentials, looked after by one team.",
    "features": [
      "Branding & identity",
      "Reliable hosting",
      "SEO foundations",
      "One point of contact"
    ],
    "sections": [
      {
        "kind": "prose",
        "eyebrow": "Overview",
        "heading": "The digital essentials, handled",
        "body": "Not every job fits neatly into a single service. Alongside our build and software work, Vastus looks after the supporting pieces that keep a business credible and visible online — branding and identity, domains and email, hosting, SEO and the everyday upkeep most businesses would rather not juggle. It is one team to call, whatever the request."
      },
      {
        "kind": "cards",
        "eyebrow": "What we cover",
        "heading": "Pieces we put in place",
        "items": [
          {
            "title": "Branding & identity",
            "desc": "Logos, colour, typography and brand guidelines so you look consistent everywhere — from your website to your invoices and social profiles."
          },
          {
            "title": "Domains & email",
            "desc": "Register and manage your domains, set up professional business email, and keep records configured so your mail lands where it should."
          },
          {
            "title": "Hosting & uptime",
            "desc": "Fast, reliable hosting with SSL, backups and monitoring, so your site stays online and loads quickly for visitors."
          },
          {
            "title": "SEO foundations",
            "desc": "On-page structure, technical fixes and content groundwork that help search engines understand your site and customers find you."
          }
        ]
      },
      {
        "kind": "list",
        "eyebrow": "Capabilities",
        "heading": "Other things we can take on",
        "items": [
          "Logo design and full brand identity packages",
          "Domain registration, transfers and DNS management",
          "Business email setup and migration",
          "Website hosting, SSL certificates and routine backups",
          "Search engine optimisation and local listings",
          "Content updates, copy refreshes and image work",
          "Analytics and tracking setup so you can see what is working",
          "Ongoing maintenance, updates and small fixes"
        ]
      },
      {
        "kind": "faq",
        "eyebrow": "Questions",
        "heading": "Common questions",
        "items": [
          {
            "q": "What counts as an \"other\" digital service?",
            "a": "Anything digital that supports your business but sits outside our core build and software services — branding, hosting, domains, email, SEO and general upkeep. If you are unsure where a request fits, just ask and we will point you the right way."
          },
          {
            "q": "Do I have to take a full website to use these services?",
            "a": "No. We are happy to handle individual pieces — set up your email, sort your hosting, refresh your branding or improve your SEO — whether or not we built the site itself."
          },
          {
            "q": "Can you take over something that already exists?",
            "a": "Yes. We can adopt an existing site, domain or hosting setup, review how it is configured and look after it from there, with a clear handover so nothing is lost."
          },
          {
            "q": "Who do I deal with day to day?",
            "a": "You deal with Vastus. We keep one point of contact across these services, so you are not chasing several suppliers when something needs doing."
          }
        ]
      }
    ]
  }
}
